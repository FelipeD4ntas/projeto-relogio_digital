const containerRelogio = document.querySelector('.container-relogio');

function relogioDigital() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    containerRelogio.innerHTML = `
        <p>${String(horas).length === 1 ? `0${horas}` : `${horas}`}</p><span> : </span>
        <p>${String(minutos).length === 1 ? `0${minutos}` : `${minutos}`}</p><span> : </span>
        <p>${String(segundos).length === 1 ? `0${segundos}` : `${segundos}`}</p>
    `
};

setInterval(relogioDigital, 1000);