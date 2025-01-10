
let x = 0;
let y = 0;

document.addEventListener('keydown', function(event){

    caja = document.getElementById('caja');

    switch(event.key){
        case 'ArrowUp':
            y -= 100;
            break;
        case 'ArrowDown':
            y +=100;
            break;
        case 'ArrowLeft':
            x -= 100;
            break;
        case 'ArrowRight':
            x += 100;
            break;
    }

    caja.style.transform = `translate(${x}px, ${y}px)`;
});
