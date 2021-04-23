let urls = [
  {
    macro: 'centro-oeste',
    micro: 'Distrito Federal',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/b91a2f6d-0188-4fc9-bc67-3b6a947eb3fe/posts/page/',
  },
  {
    macro: 'centro-oeste',
    micro: 'Goiás',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/5bc9f0bb-5f47-487d-8d27-64bd18b19bdb/posts/page/',
  },
  {
    macro: 'centro-oeste',
    micro: 'Mato Grosso',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/453ea0db-6962-4422-b190-24299cebf78e/posts/page/',
  },
  {
    macro: 'centro-oeste',
    micro: 'Mato Grosso do Sul',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/b0533cb2-c1f6-4774-81d3-91893f806df4/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'alagoas',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/cca2154e-31d8-4b44-b790-4f7291cb6c59/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'bahia',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/327479cc-1a8e-43fc-9404-5b38d0dc8644/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'ceará',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/567cc326-e4d2-458d-9c55-e5e41601e88c/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'maranhão',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/46d01a2d-e255-4d82-a58f-97c17fa31f04/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'paraíba',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/2edac1e1-27b4-4ae5-ad2d-a8e619071971/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'pernambuco recife e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/f8e1ccd5-3775-4dc1-8783-c7f5feefd73a/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'Caruaru e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/b2c72377-d11a-41f4-80e4-c78183c0ce4a/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'Petrolina e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/4adc4a62-ded6-44b4-a105-3901ad3abdf4/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'piauí',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/8624afae-9367-4404-9422-c2542f3e6499/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'rio grande do norte',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/8231636d-6d64-450a-8d7f-e022c5ef73f8/posts/page/',
  },
  {
    macro: 'nordeste',
    micro: 'sergipe',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/a7500006-211b-4835-8097-87b2c373007a/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'acre',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/7ae99aa0-b7fd-4fda-849a-44d08ea8d0e4/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'amapá',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/096e7222-e4a4-468e-a024-983cae28e24a/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'amazonas',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/19fc55df-0013-4af5-a6fb-dc5de9727d77/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'pará Belém e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/8434d15b-4d6d-4b45-941c-f316c76564c0/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'Santarém e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/a70551cb-a952-4c32-ac02-dfdba650740d/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'rondônia',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/abad3449-2957-4a69-909d-e4073e959302/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'roraima',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/ce482a11-7ab5-4c6b-af98-9da1e9bbf628/posts/page/',
  },
  {
    macro: 'norte',
    micro: 'tocantins',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/1598200c-8528-425e-a62c-37476494d51b/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'espirito santo',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/54fb2897-1bb9-4392-9655-0bdfbef34ea2/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'minas gerais belo horizonte e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/a2c643e6-5046-4c11-97d3-ac80ce156a8d/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'centro-oeste',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/3e0f1aa8-0bfa-4353-aae2-8db56025c417/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'grande minas',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/b910fa31-eff8-4c1e-8b69-a78c5764289b/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'sul de minas',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/a8d58482-6f8d-402b-b96a-edc11b1c9480/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'triângulo mineiro',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/94f5c332-96a9-45ed-b6a5-0b471c0ec44d/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'vales de minas gerais',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/4ac9f017-9cc6-44da-bcb8-11666ce1fbd4/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'zona da mata',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/2f4cdfa4-eee4-4288-bf09-91dac6de6d35/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'rio de janeiro e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/966c08a9-8e36-4196-8377-89ac8ff77ee4/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'norte fluminense',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/e0c8fe8a-c3e4-41de-9526-f54914e76ace/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'região dos lagos',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/0ed8d617-a904-4066-9bf4-f1a69643a978/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'região serrana',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/4a6b1c44-4698-4c02-ba11-5d029a67702d/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'sul e costa verde',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/af576a81-3015-4e8e-a8ce-0aa19a32cf85/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'são paulo e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/eac9a59a-bd75-4943-a98a-ff7cc1e008d2/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'bauru e marília',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/c93f63d4-a604-4c7d-beab-181f85550762/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'campinas e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/c358b79e-26f9-4aba-8489-efd71beda7b1/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'itapetininga e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/ef24d8c0-445f-4f99-95f1-455be3b591b3/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'mogi das cruzes e suzano',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/0418f283-acb5-49df-8f7a-f7807776496a/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'piracicaba e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/e09f2dbd-5b12-4d76-a851-24e4c66608d1/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'prudente e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/72667193-7370-40ed-8a7e-73f5a0c2beb3/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'ribeirão preto e franca',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/7f3763f6-02bc-4a3b-94a3-3014fa4b1cd7/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'rio preto e araçatuba',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/99889470-c139-49b6-86e0-9362081728f6/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'santos e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/c5fb2f47-1f32-40b4-bd8c-1507cb259dfa/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'são carlos e araraquara',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/dff2d2b1-5cf4-47a7-9a9d-fd3e803d9856/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'sorocaba e jundiaí',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/f4418e79-85fb-4c0c-a92e-46503f764504/posts/page/',
  },
  {
    macro: 'sudeste',
    micro: 'vale do paraíba e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/1de9bfab-0dba-48cb-b950-af3ac4c6f786/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'paraná curitiba e região',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/28228938-7a06-417b-a1d6-f5f4f77f3679/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'campos gerais e sul',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/6ceca790-87c7-4402-ba94-e1f522b8a9e5/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'norte e noroeste',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/00c02b7b-35a9-4585-857e-a54b7d625a84/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'oeste e sudoeste',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/5a876b83-459d-41af-9686-a67f8e06ad8c/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'rio grande do sul',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/7a9ce2c7-c370-41df-b39d-e96e1ed4de85/posts/page/',
  },
  {
    macro: 'sul',
    micro: 'santa catarina',
    url:
      'https://falkor-cda.bastian.globo.com/tenants/g1/feeds/477cc7bd-8271-4feb-8a47-dd1cedfb18aa/posts/page/',
  },
];

const axios = require('axios');

async function request(url, page, place) {
  console.log(`Fetching results from G1 -> ${place} -> page ${page}...`);

  //catch and HANDLE errors BELOW
  let response = await axios(`${url}/${page}`).then((x) => x.data);

  let data = response.items;
  let next = response.nextPage;

  let parsedItems = data.map((actualItem) => {
    let data = actualItem.publication;
    let idade = actualItem.age;
    let tipo = actualItem.type;
    let imagens = actualItem.content.image;
    let secao = actualItem.content.section;
    let resumo = actualItem.content.summary;
    let titulo = actualItem.content.title;
    let url = actualItem.content.url;
    let video = actualItem.content.video;
    return { data, tipo, titulo, imagens, secao, resumo, url, video, idade };
  });

  for (const item of parsedItems) {
    //check if ARTICLE AGE is older than 24h
    if (item.idade > 60 * 60 * 24) return parsedItems;
  }

  if (next) return parsedItems.concat(await request(url, next, place));
  else return parsedItems;
}
module.exports = async function fetchG1Urls() {
  let data = {};
  for (const x of urls) {
    let region = x.macro;
    let place = x.micro;
    !data[region]
      ? (data[region] = { [place]: await request(x.url, 1, place) })
      : (data[region][place] = await request(x.url, 1, place));
  }
  return data;
};
