

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrindo-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrindo-menu')
})