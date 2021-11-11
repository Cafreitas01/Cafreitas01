var { catalogo } = require('./database/catalogo.json');

AdicionarFilme

function adicionarFilme(filme) {
  return catalogo.push(filme);
}

function buscarFilme(id) {
  return catalogo.find((filme) => filme.id === id);
}

function alterarStatusEmCartaz(id) {
  const filme = buscarFilme(id);
  return (filme.emCartaz = !filme.emCartaz);
}

console.log("antes =>", catalogo);

alterarStatusEmCartaz(1);

console.log("depois =>", catalogo);


function listarTodosOsFilme() {
  const data = [];
  for (let cont = 0; cont < catalogo.length; cont++) {
    data.push(catalogo[cont]);
  }
catalogo.forEach(filme => data.push(filme));

  return data;
}


function listarFilmeEmCartaz() {
  const filmesEmCartaz = [];

 for (let cont = 0; cont < catalogo.length; cont++) {
 //if (catalogo[cont].emCartaz) {
    // filmesEmCartaz.push(catalogo[cont]);
   // }
 //}

  catalogo.filter(filme => filme.emCartaz);
}
return filmesEmCartaz

 console.log(listarFilmeEmCartaz())



function listarFilmeEmCartaz() {
  const filmesEmCartaz = [];
  for (let cont = 0; cont < catalogo.length; cont++) {
    if (catalogo[cont].emCartaz) {
      filmesEmCartaz.push(catalogo[cont]);
    }
  }

  return filmesEmCartaz;
}