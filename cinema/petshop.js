const pets = require('./pets.json');
const legume = 'batata';

function listarPets() {
  for(let i = 0; i < pets.length; i++) {
    const petEstaVacinado = pets[i].vacinado ? 'Sim' : 'Não';

    console.log('--------------');
    console.log('PET ' + pets[i].id)
    console.log('Nome: ' + pets[i].nome)
    console.log('Espécie: ' + pets[i].especie)
    console.log('Raça: ' + pets[i].raca)
    console.log('Idade: ' + pets[i].idade)
    console.log('Gênero: ' + pets[i].genero)
    console.log('Serviços: ' + pets[i].servicos.join(', '))
    console.log('É vacinado: ' + petEstaVacinado)
    console.log()
  }
}

const adicionarPet = (nome, especie, raca, idade, genero, vacinado) => {
  const pet = {
    id: pets[pets.length - 1].id + 1,
    nome: nome,
    especie: especie,
    raca: raca,
    idade: idade,
    genero: genero,
    vacinado: vacinado,
    servicos: []
  }

  pets.push(pet);

  console.log('O pet ' + pet.nome + ' foi adicionado com sucesso!');
}

adicionarPet('Pandora', 'Rato', 'Hottwailer', 15, 'Indefinido', true);

listarPets()

