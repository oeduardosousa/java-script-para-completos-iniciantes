# 📚 Tarefa: Relatório de Alunos

## 🎯 Objetivo

Praticar a manipulação de arrays de objetos utilizando:

- `filter()`
- `reduce()`
- `&&`
- `.length`
- Acesso a propriedades de objetos

---

## 📝 Exercício

Foi fornecido um array contendo informações sobre alunos:

- `nome`
- `idade`
- `curso`
- `nota`
- `ativo`

O objetivo era criar um relatório com foco nos alunos de **Engenharia da Computação que estão ativos** e calcular a média das notas deles.

---

## 💻 Solução

```js
const alunosEngComp = alunos.filter(function(aluno) {
    return aluno.ativo === true &&
           aluno.curso === 'Engenharia da Computação';
});

const somaNotas = alunosEngComp.reduce(function(acumulator, aluno) {
    return acumulator + aluno.nota;
}, 0);

const mediaNotas = somaNotas / alunosEngComp.length;

console.log(alunosEngComp);
console.log("Soma das notas:", somaNotas);
console.log("Média das notas:", mediaNotas);