const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const boton1 = document.querySelector('.menu');

imagenes.forEach(element =>{
    element.addEventListener('click', ()=>{

        aparecer(element.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showimage');
        boton1.style.opacity = '1';
    }
})

const aparecer = (element) =>{
    imagenesLight.src = element;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showimage');
    boton1.style.opacity = '0';
}