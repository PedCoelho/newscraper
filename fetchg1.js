async function fetchG1(
  path = "https://oglobo-scraper.s3-sa-east-1.amazonaws.com/g1_scrape.json",
  loader_selector = ".progress-bar"
) {
  //ex: data = await fetchG1('https://oglobo-scraper.s3-sa-east-1.amazonaws.com/g1_scrape.json','.progress-bar')

  let loader = document.querySelector(loader_selector);

  let req = await fetch(path);
  let reader = req.body.getReader();

  let total = Number(req.headers.get("content-length"));
  let loaded = 0;

  let chunks = []; // array of received binary chunks (comprises the body)

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    loaded += value.length;
    const progress = ((loaded / total) * 100).toFixed(2);
    loader.style.width = `${progress}%`;
    loader.innerText = `${progress}%`;
  }

  let chunksAll = new Uint8Array(loaded);
  let position = 0;
  for (let chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }

  // Step 5: decode into a string
  let result = new TextDecoder("utf-8").decode(chunksAll);
  return JSON.parse(result);
}
