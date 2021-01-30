function filterPropertyByKeywords(originalArray, propName, keywords) {
  // ------------------------------------------------------------------------------------------//
  //   Eventualmente, procurar de forma semelhante  //
  // ------------------------------------------------------------------------------------------//

  //implicitly returning BOOLEAN value from Array.some() to Array.filter(),
  // could be made explicit by Array.some(x) => {return Result}
  filteredArray = originalArray.filter((x) =>
    keywords.some((word) => x[propName] && x[propName].toLowerCase().includes(word))
  );

  return filteredArray;
  // .map((x) => ({
  //   title: x.titulo,
  //   subtitle: x.subTitulo,
  //   url: x.url,
  //   date: x.publicadoEm,
  // }));

  // ------------------------------------------------------------------------------------------//
  //   Esse MAP é mais para fins de simplificação, não precisa ser usado aqui nem dessa forma. //
  // ------------------------------------------------------------------------------------------//
}

function search(array, keyword) {
  // ------------------------------------------------------------------------------------------//
  //   Solução RECURSIVA (conteúdo de todas as propriedades do objeto) e GENÉRICA,             //
  //   encontrada em https://codereview.stackexchange.com/a/197375                             //
  //   Autor: Blindman67                                                                       //
  // ------------------------------------------------------------------------------------------//

  const regExp = new RegExp(keyword, 'gi');

  const check = (obj) => {
    if (obj !== null && typeof obj === 'object') {
      return Object.values(obj).some(check);
    }
    if (Array.isArray(obj)) {
      return obj.some(check);
    }
    return (typeof obj === 'string' || typeof obj === 'number') && regExp.test(obj);
  };

  return array.filter(check);
}
