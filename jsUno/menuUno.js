const boton = document.querySelector('.menu');
const menu = document.querySelector('.menu-navegacion');

boton.addEventListener('click', () =>{
    menu.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != boton){
        menu.classList.toggle("spread")
    }
})