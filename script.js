const getSubmenu = document.getElementsByClassName('desativado');
const arrumado = Array.from(getSubmenu)

const exibeseReverso = document.querySelector('#reverso')


function exibir() {
    arrumado.forEach((item, index) => { 
       arrumado[index].classList.remove('desativado')
    })}
    
function exibirReverso() {
exibeseReverso.classList.add('desativado')
    
}










