const checkDateDifference = require('./DateDifference.js');
const fs = require('fs');
const axios = require('axios');

const simpleGit = require('simple-git');
const git = simpleGit('../', { binary: 'git' });

const notifier = require('node-notifier');

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

let uniqueNews;

(async function scrape(attempt, maxAttempts) {
  const requestUrl =
    'https://oglobo.globo.com/api/v1/ultimas-noticias/ece_frontpage/ece_frontpage/conteudo.json?';

  //STOP RECURSION
  if (attempt >= maxAttempts) {
    // fs.appendFileSync(
    //   'log.txt',
    //   `${new Date().toLocaleString()} - JOB CANCELLED: Max nº of attempts (${maxAttempts}) reached.\n`
    // );

    // notifier.notify({
    //   title: 'Noticias OGLOBO - 24h',
    //   message: 'JOB CANCELLED: Failed to reach API',
    //   icon: './dist/24-globo_icon.png',
    //   appID: 'WebScraper',
    // });

    throw new Error('scrape(): max attempts reached');
  }

  async function makeRequest(page) {
    const params = new URLSearchParams({
      pagina: page,
    });
    console.log(`Fetching results from page ${page}...`);

    const result = await axios(requestUrl + params.toString()).then((data) => {
      // console.log(data.data);
      return data.data[0];
    });

    // console.log(result.conteudos);

    if (
      // ----------------------------------//
      //   Needs to include ATUALIZADO EM  //
      // ----------------------------------//

      result.conteudos.map((x) => checkDateDifference(x.publicadoEm)).some((time) => time >= 1)
    ) {
      console.log('Older news reached. Stopping fetch.');
      return result.conteudos;
    } else if (result.conteudos.length > 0) {
      return result.conteudos.concat(await makeRequest(page + 1));
    } else {
      return result;
    }
  }

  var noticias = await makeRequest(0).catch(async (e) => {
    console.error(`\nERROR: ${e.message}\n\nREQUEST_URL: ${requestUrl}\n`);

    // fs.appendFileSync(
    //   'log.txt',
    //   `${new Date().toLocaleString()} - SERVER ERROR: Couldn't fetch origin. Retrying...\n`
    // );
    (async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await delay(10000);
      attempt = attempt + 1;

      scrape(attempt, maxAttempts);
    })();
  });

  if (noticias) {
    uniqueNews = [...noticias.reduce((m, t) => m.set(t.titulo, t), new Map()).values()];

    let forPrint = uniqueNews
      .map((x, i) => {
        return `
    <div class="card">
      <div class="title">
        <h1>${i}</h1>
        <p>Publicado em: ${new Date(x.publicadoEm).toLocaleString()}
        </p>
      </div>
      <div class="main-section">
        <div>
          <img src="${x.imagens.length > 0 ? x.imagens[0].url : 'noimage-found.png'}">
        </div>
        <div>
          <b>Categoria: ${x.secao.nome}</b><br>
          <h2>${x.titulo}</h2>
          <h4>${x.subTitulo}</h4>
          <p>Endereço:</p>
          <a class="link" href="${x.url}">${x.url}</a>
        </div>
      </div>
    </div>
    `;
      })
      .join('');

    const header = `<!DOCTYPE html>
    <html lang="pt-BR">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Noticias JORNAL OGLOBO - 24h</title>
      <link rel="stylesheet" href="style.css">
      <link rel="shortcut icon" href="favicon.ico" />
    </head>
    
    <body>
      <div class="image-hider"><img src="./icon.png"></div>
      `;

    const closing = `<script>
    document.querySelector('.image-hider').addEventListener('click', toggleImages)

    function toggleImages() {
      let images = document.querySelectorAll('.main-section div:first-child')
      images.forEach((div) => {
        div.toggleAttribute('hidden')
        div.style.flex = '0 0 0 100%'
      })

      let otherDiv = document.querySelectorAll('.main-section div:last-child')
      otherDiv.forEach((div) => div.classList.toggle('full-flex'))
    }
  </script>
</body>

</html>`;

    // console.log(uniqueNews);

    // Create unique bucket name
    var bucketName = 'oglobo-scraper';
    // Create name for uploaded object key
    var keyName = 'latest.json';

    // Create params for putObject call
    var objectParams = {
      Bucket: bucketName,
      Key: keyName,
      Body: JSON.stringify(uniqueNews),
    };
    // Create object upload promise
    var uploadPromise = new AWS.S3().putObject(objectParams).promise();

    uploadPromise
      .then((data) => console.log('Successfully uploaded data to ' + bucketName + '/' + keyName))
      .catch((err) => console.error(err, err.stack));

    // fs.writeFile('../index.html', [header, forPrint, closing].join(''), (err, data) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   fs.appendFileSync(
    //     'log.txt',
    //     `${new Date().toLocaleString()} - JOB OK: index.html file created\n`
    //   );
    // });

    // try {
    //   await git.add('index.html');
    //   await git.commit(`News Update - ${new Date().toLocaleString()}`);
    //   await git.push();
    //   fs.appendFileSync(
    //     'log.txt',
    //     `${new Date().toLocaleString()} - JOB OK: Git Operation sucessfull\n`
    //   );

    //   notifier.notify({
    //     title: 'Noticias OGLOBO - 24h',
    //     message: 'Git Push Sucessful',
    //     icon: './dist/24-globo_icon.png',
    //     appID: 'WebScraper',
    //   });
    // } catch (e) {
    //   console.log('git operations failed');
    //   fs.appendFileSync(
    //     'log.txt',
    //     `${new Date().toLocaleString()} - SERVER ERROR: GIT Operations Failed\n`
    //   );
    // }
  }
})(1, 5);
