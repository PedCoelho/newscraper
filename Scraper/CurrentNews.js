const checkDateDifference = require('./DateDifference.js');
const axios = require('axios');

const AWS = require('aws-sdk');
const storeInBucket = require('./StoreInBucket.js');
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
      //   Should include ATUALIZADO EM?  //
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

    let filters = [
      'Esportes',
      'Filmes',
      'Ela',
      'ComÃ©rcio em pauta',
      'Gastronomia',
      'OpiniÃ£o',
      'TV',
      'Cultura',
      'content.include.diversos',
      'Rio Gastronomia',
      'Bairros',
      'Boa Viagem',
      'Viagem',
      'Rio Show',
      'Música',
      'Decoração',
      'Como economizar',
      'Gente',
    ];

    const filteredNews = uniqueNews.filter(
      (el) => !filters.some((word) => el.secao.nome.toUpperCase() == word.toUpperCase())
    );
    const excludedNews = uniqueNews.filter((el) =>
      filters.some((word) => el.secao.nome.toUpperCase() == word.toUpperCase())
    );
    const excludedCount = uniqueNews.length - filteredNews.length;
    const newsCount = filteredNews.length;

    let categorizedNews = filteredNews.reduce((acc, obj) => {
      !acc[obj.secao.nome] ? (acc[obj.secao.nome] = [obj]) : acc[obj.secao.nome].push(obj);
      return acc;
    }, {});

    let categorizedExclusions = excludedNews.reduce((acc, obj) => {
      !acc[obj.secao.nome] ? (acc[obj.secao.nome] = [obj]) : acc[obj.secao.nome].push(obj);
      return acc;
    }, {});

    let categorized = { news: categorizedNews, exclusions: categorizedExclusions };

    const obj = {
      excludedCount,
      newsCount,
      data: filteredNews,
      excluded: excludedNews,
      categorized,
    };

    storeInBucket('latest.json', obj);

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
