const pads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
pads.forEach(pad => {
    pad.addEventListener('click', () => {
    const audio = pad.querySelector('.clip')
    audio.currentTime = 0;
    audio.play();
    display.textContent = pad.id;
    })
})

document.addEventListener('keydown', (event) => {
    const tecla = event.key.toUpperCase();
    //La tecla esta en mayuscula y coincide con el id por eso lo busco directamente en el DOM
    const audio = document.getElementById(tecla);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.textContent = audio.parentElement.id;
    }
})