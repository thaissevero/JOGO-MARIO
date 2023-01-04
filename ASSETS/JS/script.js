const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; //

        mario.src = './ASSETS/IMAGENS/game-over.png';
        mario.style.width = '75px'       //podemos modificar a imagem aqui mesmo invés de ser no CSS.
        mario.style.marginLeft = '50px' //distancia da margem entre o mario e o pipe quando dá game over.

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

/*
keydowm = dispara quando qualquer tecla é pressionada;
replace = usado para remover a string e deixar os valores numéricos;
setInterval = executar uma função em um determinado intervalo de tempo;
clearInterval = limpa/desativa o timer configurado pela função setInterval (no casso o nosso loop);
*/