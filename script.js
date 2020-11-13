let bloco;

document.querySelectorAll('.container-pallet > div').forEach(block => {
    block.addEventListener('click', ( ) => {
        bloco = window.getComputedStyle(block, null).getPropertyValue("background-color");
    });
});

document.querySelectorAll(".block-paint").forEach(element => {
    element.addEventListener('click', () =>{
        element.style.backgroundColor = bloco;
    });
});


document.querySelectorAll(".block-paint").forEach(element => {
    element.addEventListener('contextmenu', (e) =>{
        e.preventDefault();
        element.style.backgroundColor = 'white';
    });
});

document.getElementById('btn-limpar').addEventListener('click', () => {
    document.querySelectorAll(".block-paint").forEach(element => {
        element.style.backgroundColor = 'white';
    });
});

