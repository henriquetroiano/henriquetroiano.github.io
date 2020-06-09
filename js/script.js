function actualLocation() {
    return document.getElementsByTagName('title')[0].innerText
}

 

document.querySelector('#menu_button').addEventListener('click', function() {
        const selMenu = document.querySelector('#menu_mobile')
        selMenu.classList.toggle('hidden')
})














