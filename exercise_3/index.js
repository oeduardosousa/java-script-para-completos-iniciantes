const produtos = [
    {
        nome: "Teclado",
        preco: 250,
        estoque: 8
    },
    {
        nome: "Mouse",
        preco: 120,
        estoque: 15
    },
    {
        nome: "Monitor",
        preco: 900,
        estoque: 3
    },
    {
        nome: "Headset",
        preco: 300,
        estoque: 0
    },
    {
        nome: "SSD",
        preco: 450,
        estoque: 6
    }
];


for (const produto of produtos) {
    console.log(produto.nome, produto.preco);
};

for (const produto of produtos) {
    if (produto.estoque < 6) {
        console.log("Estoque baixo em:", produto.nome);
    }
}

for (const produto of produtos) {
    if (produto.estoque === 0) {
        console.log("Estoque zerado em:", produto.nome);
    }
}