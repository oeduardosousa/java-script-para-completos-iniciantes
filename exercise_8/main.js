// Selecionando os elementos do formulário
const formulario = document.querySelector('#formulario');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const idade = document.querySelector('#idade');
const curso = document.querySelector('#curso');
const mensagem = document.querySelector('#mensagem');
const termos = document.querySelector('#termos');
const resultado = document.querySelector('#resultado');
const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();

    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const idadeValue = idade.value.trim();
    const cursoValue = curso.value.trim();
    const mensagemValue = mensagem.value.trim();
    const termosChecked = termos.checked;

    if (nomeValue === '' || emailValue === '' || idadeValue === '' || cursoValue === '' || mensagemValue === '') {
        return alert('Por favor, preencha todos os campos obrigatórios.');
    }

    if (!termosChecked) {
        return alert('Por favor, aceite os termos e condições.');
    }

    console.log('Botão clicado!');
    
    document.body.style.background = 'red';

    console.log('Nome:', nomeValue);
    console.log('Email:', emailValue);
    console.log('Idade:', idadeValue);
    console.log('Curso:', cursoValue);
    console.log('Mensagem:', mensagemValue);
    console.log('Termos aceitos:', termosChecked);

});