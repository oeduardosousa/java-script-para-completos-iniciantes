# 📚 Tarefa: Controle de Estoque com Loops

## 🎯 Objetivo

Praticar loops em JavaScript utilizando `for...of` para percorrer arrays de objetos.

---

## 📝 Exercício

Foi fornecido um array contendo produtos de uma loja:

- `nome`
- `preco`
- `estoque`

O objetivo era percorrer os produtos e gerar informações sobre o estoque.

---

## 💻 Solução

```js
for (const produto of produtos) {
    console.log(produto.nome, produto.preco);
}

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