// adiciona a funcao dde troca de classe ao botao do menu, que no css fará aparecer o menu
document.querySelector('#menu_button').addEventListener('click', function (click) {
    click.stopPropagation();
    const selMenu = document.querySelector('#menu_mobile')
    selMenu.classList.toggle('hidden')
})

// seleciona o body para definir que ele oculte o menu
// o stopPropagation é usado no evento para que o clique no botão não seja passado para o body.
document.querySelector('body').addEventListener('click', function (click) {
    click.stopPropagation();
    const selM = document.querySelector('#menu_mobile')
    selM.classList.add('hidden')
})















