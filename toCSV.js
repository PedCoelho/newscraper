function getCSV(macroregiao_obj, filename) {
  let regioes = Object.keys(macroregiao_obj);

  console.log(regioes);

  let headers = "MICROREGIAO,DATA,TITULO,RESUMO,URL,SECAO,TIPO,IMAGEM";

  let csvLines = [headers];

  regioes.forEach((regiao) => {
    macroregiao_obj[regiao].forEach((noticia) => {
      let csvLine = `"${regiao.replace(/"/g, '""')}",${noticia.data},"${
        noticia.titulo.replace(/"/g, '""') || undefined
      }","${noticia?.resumo?.replace(/"/g, '""')}",${noticia.url},${
        noticia.secao
      },${noticia.tipo},${noticia?.imagens?.url}`;

      csvLines.push(csvLine);
    });
  });

  var universalBOM = "\uFEFF";

  let csv = csvLines.join("\n");
  console.log(csvLines);

  var hiddenElement = document.createElement("a");
  hiddenElement.href =
    "data:text/csv;charset=utf-8," + encodeURIComponent(universalBOM + csv);
  hiddenElement.target = "_blank";
  hiddenElement.download = `${filename}.csv`;
  hiddenElement.click();
}
