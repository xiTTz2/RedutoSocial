const whatsapp = document.querySelector(".menu-whatsapp")
const itemsubmenu = document.querySelector(".itens-submenu")
const menu = document.querySelector('.submenu')

// ---------------------------
const testeButton = document.querySelector('.teste')
const localizacao = document.querySelector('#localizacao');


function abrirFecharMenu(){

    if(testeButton){
    testeButton.classList.toggle("active")
    itemsubmenu.classList.toggle('open')
    }

}

function fechar(){
    if(testeButton){
        testeButton.classList.toggle('active')
        itemsubmenu.classList.toggle('open')
    }
}




function mover(){
    if(whatsapp && menu && itemsubmenu){

    
    if(window.innerWidth <= 768){
        itemsubmenu.appendChild(whatsapp)

    }else{
        menu.appendChild(whatsapp)
    }
}
    console.log('chamou ')
}



testeButton.addEventListener('click', abrirFecharMenu)
localizacao.addEventListener('click', fechar)
// Move o botão para dentro do submenu quando a janela for menor que 768px
window.addEventListener('resize', mover);
window.addEventListener('load', mover);
