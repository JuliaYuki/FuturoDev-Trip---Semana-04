// Variáveis para armazenar as quantidades de cada produto
let quantHortifruti = 0;
let quantLaticinios = 0;
let quantCarnes = 0;
let quantPeixes = 0;
let quantAves = 0;

// Loop para interagir com o cliente até que ele decida fechar o pedido
while (true) {
  // Pergunta ao cliente qual produto deseja comprar
  let opcao = prompt(
    "Selecione um produto:\n1) Hortifruti\n2) Laticínios\n3) Carnes\n4) Peixes\n5) Aves\n6) Fechar pedido"
  );

  // Converte a opção para número inteiro
  opcao = parseInt(opcao);

  // Verifica a opção escolhida pelo cliente
  switch (opcao) {
    case 1:
      // Solicita a quantidade de itens de Hortifruti
      let quantHortifrutiCompra = parseInt(
        prompt("Digite a quantidade de itens de Hortifruti que deseja comprar:")
      );
      quantHortifruti += quantHortifrutiCompra;
      break;
    case 2:
      // Solicita a quantidade de itens de Laticínios
      let quantLaticiniosCompra = parseInt(
        prompt("Digite a quantidade de itens de Laticínios que deseja comprar:")
      );
      quantLaticinios += quantLaticiniosCompra;
      break;
    case 3:
      // Solicita a quantidade de itens de Carnes
      let quantCarnesCompra = parseInt(
        prompt("Digite a quantidade de itens de Carnes que deseja comprar:")
      );
      quantCarnes += quantCarnesCompra;
      break;
    case 4:
      // Solicita a quantidade de itens de Peixes
      let quantPeixesCompra = parseInt(
        prompt("Digite a quantidade de itens de Peixes que deseja comprar:")
      );
      quantPeixes += quantPeixesCompra;
      break;
    case 5:
      // Solicita a quantidade de itens de Aves
      let quantAvesCompra = parseInt(
        prompt("Digite a quantidade de itens de Aves que deseja comprar:")
      );
      quantAves += quantAvesCompra;
      break;
    case 6:
      // Cliente decidiu fechar o pedido
      // Identifica o produto mais comprado
      let produtos = ["Hortifruti", "Laticínios", "Carnes", "Peixes", "Aves"];
      let quantidades = [
        quantHortifruti,
        quantLaticinios,
        quantCarnes,
        quantPeixes,
        quantAves,
      ];
      let maiorQuantidade = 0;
      let produtoMaisComprado = "";

      for (let i = 0; i < quantidades.length; i++) {
        if (quantidades[i] > maiorQuantidade) {
          maiorQuantidade = quantidades[i];
          produtoMaisComprado = produtos[i];
        }
      }

      // Exibe o produto mais comprado
      let mensagem =
        "O produto mais comprado foi " +
        produtoMaisComprado +
        " com uma quantidade de " +
        maiorQuantidade +
        ".";
      alert(mensagem);

      // Encerra o loop
      break;
    default:
      alert("Opção inválida. Por favor, selecione uma opção válida.");
      break;
  }

  // Se o cliente decidiu fechar o pedido, sai do loop
  if (opcao === 6) {
    break;
  }
}

// Mensagem final
alert("Pedido fechado. Obrigado pela compra!");
