const whatsapp = document.querySelector(".menu-whatsapp")
const itemsubmenu = document.querySelector(".itens-submenu")
const menu = document.querySelector('.submenu')

// botao de localização do site
const menu_burguer = document.querySelector('.teste')
const localizacao = document.querySelector('#localizacao');

//Abrir e fechar o menu quando clicado
function abrirFecharMenu() {

    if (menu_burguer) {
        menu_burguer.classList.toggle("active")
        itemsubmenu.classList.toggle('open')
    }

}

//fechar o menu quando clicar no botão de localização
function fechar() {
    if (menu_burguer) {
        menu_burguer.classList.toggle('active')
        itemsubmenu.classList.toggle('open')
    }
}



//Mover o botão whatssapp para dentro da div "item-submenu" quando entrar no modo celucar
//E quando sair do modo celular o botão volta para a div "menu"
function mover() {
    if (whatsapp && menu && itemsubmenu) {


        if (window.innerWidth <= 768) {
            itemsubmenu.appendChild(whatsapp)

        } else {
            menu.appendChild(whatsapp)
        }
    }

}


//Ativa as funções de abrir e fechar o menu e o botão localização
menu_burguer.addEventListener('click', abrirFecharMenu)
localizacao.addEventListener('click', fechar)

// Move o botão para dentro do submenu quando a janela for menor que 768px
window.addEventListener('resize', mover);
window.addEventListener('load', mover);
