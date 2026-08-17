const button = document.querySelector('#btnExecutar');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute() {
    console.log('Início da execução');
    await wait(2000);
    console.log('Execução finalizada');
}

button.addEventListener('click', execute);