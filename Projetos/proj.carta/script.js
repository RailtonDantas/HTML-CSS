let poema =  document.getElementById("poema")
poema.style.display = "none"
var container = document.getElementById("container")

function abrircarta(){
     let tampacarta = document.getElementById("frente_carta_cima")
     tampacarta.style.borderColor = "transparent transparent rgb(148, 50, 143) transparent"   
     tampacarta.style.borderWidth = "0px 160px 100px 160px"
     tampacarta.style.translate = "0px -200px"
     tampacarta.style.zIndex = "-1"

     let carta = document.getElementById("carta")
     carta.style.translate = "0px -70px"
     
     let ler = document.getElementsByTagName("button")[1]
     ler.style.display = "block"
     
     let abrir = document.getElementsByTagName("button")[0]
     abrir.style.display = "none"
     
    }
    
    function lerpoema(){
        poema.style.display = "block"
        let backcarta = document.getElementById("backcarta")
        let cont = document.getElementById("cont_btn")
        let tampacarta = document.getElementById("frente_carta_cima")
        let frente = document.getElementById("frentedacarta")
        let baixo = document.getElementById("frente_carta_baixo")
        let btn_ler = document.getElementById("ler")
        let btn_voltar = document.getElementById("voltar")
        btn_voltar.style.translate = "0px 80px"
        btn_ler.style.display = "none"
        backcarta.style.display = "none"
        tampacarta.style.display = "none"
        frente.style.display ="none"
        baixo.style.display = "none"
        cont.style.display = "none"   
    }