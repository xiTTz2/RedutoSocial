var whatsapp = document.querySelector(".menu-whatsapp")
var itemsubmenu = document.querySelector(".itens-submenu")


//Abrir e fechar nav menu
function abrirFechar(){
    var button = document.querySelector(".button-mobile")
    
    

    if(itemsubmenu.classList.contains('open')){
        itemsubmenu.classList.remove('open')
        button.classList.remove('remove')
        document.querySelector(".iconmobile").src = 'assets/img/icon/openIcon.svg'

    }
    else{
        itemsubmenu.classList.add('open')
        button.classList.remove('open')
        document.querySelector(".iconmobile").src = 'assets/img/icon/closeIcon.svg'
    }
}

screen.addEventListener('onchange',()=>{
    if(screen.availWidth <= 768){
        itemsubmenu.appendChild(whatsapp)
        console.log("dentro do if")
    }
    console.log("fora do if")
});
