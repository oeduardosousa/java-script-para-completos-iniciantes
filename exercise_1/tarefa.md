# 📚 Tarefa: Manipulação de Arrays com `filter()`

## 🎯 Objetivo

Praticar a manipulação de arrays de objetos em JavaScript utilizando o método `filter()`.

---

## 📝 Exercício

Foi fornecido um array chamado `pedidos`, contendo objetos com informações sobre pedidos de clientes:

- `id`
- `cliente`
- `produto`
- `categoria`
- `preco`
- `quantidade`
- `status`

O objetivo era criar um novo array contendo **apenas os pedidos que foram entregues**.

### Solução

```js
const pedidosEntregues = pedidos.filter(function(entregue) {
    return entregue.status === 'entregue';
});

console.log(pedidosEntregues);