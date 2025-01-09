
let x = 0;
let y = 0;

document.addEventListener('keydown', function(event){

    caja = document.getElementById('caja');

    switch(event.key){
        case 'ArrowUp':
            y -= 50;
            break;
        case 'ArrowDown':
            y +=50;
            break;
        case 'ArrowLeft':
            x -= 50;
            break;
        case 'ArrowRight':
            x += 50;
            break;
    }

    caja.style.transform = `translate(${x}px, ${y}px)`;
});
