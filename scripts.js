
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //para a função

    audio.currentTime = 0 //retorna o audio para o inicio
    
    key.classList.add('playing');
    
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //pule senão for um transform
    this.classList.remove('playing')
    
   
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

addEventListener('keydown', playSound)