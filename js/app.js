const gameBoard = document.querySelector('.game_board')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const counter = document.querySelector('.score');

let score = null;

const jumpMario = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 800)
}
console.log(pipe)
const endGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition)
    score += 10;
    counter.textContent = `${score} pontos`
    if(pipePosition <= 60 && marioPosition <= 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.bottom = `${marioPosition}px`;
        mario.src = './assents/img/mario-dead.gif';
        clearInterval(endGame);      
    }

    if(score > 1200){
        pipe.style.animation = 'pipe-animate 1500ms infinite linear'
    }

    if(score > 3000){
        pipe.style.animation = 'pipe-animate 1s infinite linear'
    }
}, 50);

document.addEventListener('keydown', jumpMario)