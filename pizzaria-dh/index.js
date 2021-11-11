const pizzas = 
require('./database/pizzas.json');

function listarPizzas() {
  pizzas.forEach(function(pizza) {
    console.log(`
    ----------------
    Pizza: ${pizza.id}

    Sabor: ${pizza.sabor}
    Categoria: ${pizza.categoria}
    Preço: ${pizza.preco}
    Disponível: ${pizza.disponivel ? 'Sim' : 'Nao'}
    `);
  });
  console.log(listarPizzas)
}

function adicionarPizza(sabor, categoria, preco) {
  const pizza = {
    id: pizzas[pizzas.length - 1].id + 1,
    sabor: sabor,
    categoria: categoria,
    preco: preco,
    disponivel: true
  }

  pizzas.push(pizza);

   console.log(`A pizza de ${sabor} foi adicionada!`);
}

adicionarPizza('Provolone', 'Salgada', 10)
adicionarPizza('Atum', 'Salgada', 10)
adicionarPizza('Mussarela', 'Salgada', 10)
adicionarPizza('Churros', 'Doce', 10)
adicionarPizza('Escarola', 'Vegetariana', 10)


//'Quatro Queijos' => pizza
//'Qua' => [possiveisPizzas]

function procurarPizzaPeloNome(nomePizza) {
  const pizzasFiltradas = pizzas.filter(pizza => {
    return pizza.sabor.includes(nomePizza);
  });

  return pizzasFiltradas;
}

//console.log(procurarPizzaPeloNome('AT'));