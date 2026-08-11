const pedidos = [
    {
        id: 1,
        cliente: "Eduardo",
        produto: "Teclado",
        categoria: "periferico",
        preco: 250,
        quantidade: 2,
        status: "entregue"
    },
    {
        id: 2,
        cliente: "Lucas",
        produto: "Mouse",
        categoria: "periferico",
        preco: 120,
        quantidade: 1,
        status: "pendente"
    },
    {
        id: 3,
        cliente: "Ana",
        produto: "Monitor",
        categoria: "hardware",
        preco: 900,
        quantidade: 1,
        status: "entregue"
    },
    {
        id: 4,
        cliente: "Marcos",
        produto: "Headset",
        categoria: "periferico",
        preco: 300,
        quantidade: 3,
        status: "entregue"
    },
    {
        id: 5,
        cliente: "Julia",
        produto: "SSD",
        categoria: "hardware",
        preco: 450,
        quantidade: 2,
        status: "cancelado"
    }
];


const pedidosEntregues = pedidos.filter(function(entregue){
    return entregue.status === 'entregue';
});

console.log(pedidosEntregues)