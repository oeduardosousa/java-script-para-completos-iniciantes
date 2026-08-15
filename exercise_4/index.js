class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  valorEstoque() {
    return this.preco * this.estoque;
  }

  mostrarProduto() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$${this.preco}`);
    console.log(`Estoque: ${this.estoque}`);
    console.log(`Valor em estoque: R$${this.valorEstoque()}`);
  }
}

const produto1 = new Produto("Monitor", 900, 3);
const produto2 = new Produto("Headset", 250, 5);
const produto3 = new Produto("SSD", 750, 2);
const produto4 = new Produto("Teclado", 350, 10);

console.log(produto1.valorEstoque());
console.log(produto2.valorEstoque());
console.log(produto3.valorEstoque());
console.log(produto4.valorEstoque());

produto1.mostrarProduto();