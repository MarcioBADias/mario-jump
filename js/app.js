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

const printScore = () => {
    score += 10;
    counter.textContent = `${score} pontos`
}


const endGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const jumpFail = pipePosition <= 60 && marioPosition <= 70;
    const speed2 = score > 1200;
    const speed3 = score > 3000;
    const stopPipe = () => {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
    
    const stopMario = () => {
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './assents/img/mario-dead.gif';
    }

    printScore();

    if(jumpFail){
        stopPipe();
        stopMario();
        clearInterval(endGame);      
    }

    if(speed2){
        pipe.style.animation = 'pipe-animate 1500ms infinite linear'
    }

    if(speed3){
        pipe.style.animation = 'pipe-animate 1s infinite linear'
    }
}, 50);

document.addEventListener('keydown', jumpMario);
document.addEventListener('touchstart', jumpMario);