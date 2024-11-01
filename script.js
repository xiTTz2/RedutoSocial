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
    const celular_tela = 768
    if (whatsapp && menu && itemsubmenu) {


        if (window.innerWidth <= celular_tela) {
            itemsubmenu.appendChild(whatsapp)

        } else {
            menu.appendChild(whatsapp)
        }
    }

}


//Ativa as funções de abrir e fechar o menu e o botão localização


//Parte de deixar o nav menu transparente com efeito de blur
const menuHeader2 = document.querySelector("header")


function scrollFunciton() {
    const celular_tela = 768
    const posicaoInicial = 0
    var ativado = false


    if (menuHeader2) {
        if (window.screen.width > celular_tela) {
            if (ativado == false) {
                if (window.scrollY > posicaoInicial) {
                    menuHeader2.style.transition = '1.5s'
                    menuHeader2.classList.add("ativarFundo")
                    ativado = true
                }
            }
        }
        if (window.scrollY == posicaoInicial) {

            menuHeader2.style.transition = '1.5s'
            menuHeader2.classList.remove("ativarFundo")
            ativado = false
        }
        if (window.length <= celular_tela) {
            ativado = false
        }
    }
}

//chama a função para deixar o fundo transparante
window.addEventListener("scroll", scrollFunciton)

//Chama as funções para abrir e fechar o menu lateral quando estiver no celular
menu_burguer.addEventListener('click', abrirFecharMenu)
localizacao.addEventListener('click', fechar)

// Move o botão para dentro do submenu quando a janela for menor que 768px
window.addEventListener('resize', mover);
window.addEventListener('load', mover);


//Vai pegar as fotos da pagina inicial e salvar em cache para usar menos recursos na hora de carregar
const imgs = document.querySelectorAll("img")

function salvarCache() {

    caches.open("cache-img-site").then(cache => {
        imgs.forEach(img => {
            const url = img.src;//Pegar o diretorio da imagem no site
            fetch(url).then(response => {
                cache.put(url, response);//Salvar no cache do navegador
            })
        })
    })
}

salvarCache()