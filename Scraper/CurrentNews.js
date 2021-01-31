const checkDateDifference = require('./DateDifference.js');
const fs = require('fs');
const axios = require('axios');

let news;

(async () => {
  const requestUrl =
    'https://oglobo.globo.com/api/v1/ultimas-noticias/ece_frontpage/ece_frontpage/conteudo.json?';

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

  const noticias = await makeRequest(0).catch((e) =>
    console.error(`\nERROR: ${e.message}\n\nREQUEST_URL: ${requestUrl}\n`)
  );

  if (noticias) {
    news = [...noticias.reduce((m, t) => m.set(t.titulo, t), new Map()).values()];

    let forPrint = news
      .map((x, i) => {
        return `
    <div class="card">
    <div class="title">
    <h1>${i}</h1>
    <p>Publicado em: ${new Date(x.publicadoEm).toLocaleString()}
    </p>
    </div>
      <b>Categoria: ${x.secao.nome}</b><br>
      <h2>${x.titulo}</h2>
      <h4>${x.subTitulo}</h4>
      <p>Endereço:</p>
      <a class="link" href="${x.url}">${x.url}</a>
    </div>
    `;
      })
      .join('');

    console.log(news);

    fs.writeFile('./forPrint.html', forPrint, (err, data) => {
      if (err) {
        return console.log(err);
      }
    });

    // console.log(JSON.stringify(news, null, 2));
  }
})();
