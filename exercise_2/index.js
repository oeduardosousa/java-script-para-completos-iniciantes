const alunos = [
    {
        nome: "Eduardo",
        idade: 18,
        curso: "Engenharia da Computação",
        nota: 85,
        ativo: true
    },
    {
        nome: "Lucas",
        idade: 19,
        curso: "Administração",
        nota: 62,
        ativo: true
    },
    {
        nome: "Ana",
        idade: 18,
        curso: "Engenharia da Computação",
        nota: 91,
        ativo: true
    },
    {
        nome: "Marcos",
        idade: 20,
        curso: "Sistemas de Informação",
        nota: 48,
        ativo: false
    },
    {
        nome: "Julia",
        idade: 19,
        curso: "Engenharia da Computação",
        nota: 76,
        ativo: true
    },
    {
        nome: "Pedro",
        idade: 21,
        curso: "Administração",
        nota: 55,
        ativo: true
    }
];

const alunosEngComp = alunos.filter(function(aluno){
    return aluno.ativo === true && aluno.curso === 'Engenharia da Computação'
});

const somaNotas = alunosEngComp.reduce(function(acumulator, aluno){
    return acumulator + aluno.nota
}, 0)

const mediaNotas = somaNotas / alunosEngComp.length

console.log(alunosEngComp)
console.log("Soma das notas:", somaNotas)
console.log("Média das notas:", mediaNotas)