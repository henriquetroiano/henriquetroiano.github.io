const aaa = document.querySelector('.menu li')
const submenu = document.querySelector('.submenu')
const clickLocation = window.addEventListener('click', function() {
    console.log(this.event.target )
})

function alertaHome() {
    aaa.addEventListener('click', function() {
        submenu.classList.toggle('submenu')
    })
}



alertaHome()










