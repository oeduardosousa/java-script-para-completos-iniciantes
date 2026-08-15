const formulario = document.querySelector('#formulario');

const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const posicao = document.querySelector('#posicao');
const time = document.querySelector('#time');
const numero = document.querySelector('#numero');
const gols = document.querySelector('#gol');
const observacao = document.querySelector('#observacao');
const titular = document.querySelector('#titular');

const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeValue = nome.value.trim();
    const idadeValue = idade.value.trim();
    const posicaoValue = posicao.value.trim();
    const timeValue = time.value.trim();
    const numeroValue = numero.value.trim();
    const golsValue = gols.value.trim();
    const observacaoValue = observacao.value.trim();
    const titularChecked = titular.checked;

    if (
        nomeValue === '' ||
        idadeValue === '' ||
        posicaoValue === '' ||
        timeValue === '' ||
        numeroValue === '' ||
        golsValue === ''
    ) {
        resultado.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        resultado.className = 'erro';

        return;
    }

    const statusJogador = titularChecked ? 'Titular' : 'Reserva';

    resultado.className = 'sucesso';

    resultado.innerHTML = `
        <h2>Jogador cadastrado!</h2>

        <p><strong>Nome:</strong> ${nomeValue}</p>
        <p><strong>Idade:</strong> ${idadeValue} anos</p>
        <p><strong>Posição:</strong> ${posicaoValue}</p>
        <p><strong>Time:</strong> ${timeValue}</p>
        <p><strong>Número:</strong> ${numeroValue}</p>
        <p><strong>Gols:</strong> ${golsValue}</p>
        <p><strong>Observação:</strong> ${observacaoValue || 'Nenhuma'}</p>
        <p><strong>Status:</strong> ${statusJogador}</p>
    `;
});