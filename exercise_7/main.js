// Mostrando o título do documento no console
const title = document.getElementById("titulo")
console.log(title)

// Alterando o texto do elemento com id "descricao"
document.getElementById("descricao").innerText = "Texto alterado por innerText!";

// Selecionando todos os elementos com a classe "produto" e mostrando no console
const products = document.querySelectorAll(".produto")
console.log(products)

// Adicionando um evento de clique ao botão e mostrando uma mensagem no console
document.querySelector("button").addEventListener("click", function() {
    console.log("Botão clicado!");
});

// Alterando o texto do título ao clicar no botão
document.querySelector("button").addEventListener("click", function() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
});

// Adicionando um novo item à lista
const lista = document.getElementById("lista");
const novoItem = document.createElement("li");
novoItem.innerText = "Item adicionado com JavaScript!";
lista.appendChild(novoItem);