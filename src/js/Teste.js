$(document).ready(function(){

    $("#barras").click (function(){
    if ($("#menu").hasClass ("#menu-ativo")){ //tudo isso pode ser substituido pelo comonado ".toggleClass"
        $("menu").removeClass("#menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")
        }
    })
    })
    
    
    
    $(document) .ready (function(){
    $("#carrossel img:eq(0)") .addClass("banner-ativo").show()
    
    
    })
    
    setInterval(slide,2000)
    function slide(){
        
        if($(".banner-ativo").next().length){
            $(".banner-ativo").removeClass ("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $(".banner-ativo"). removeClass().hide()
            $("#carrossel img:eq(0)") .addClass("banner-ativo").show()
    
        }
    }
    
    
    function mostrarpopup(){
        window.alert("Fala mestre! (a). Seja bem vindo (a)")
    }
    
    let email = document.getElementById("campo-email");
    
    function enviaremail(){
        let emaildigitado = email.value;
        console.log(emaildigitado)
    }
    
    let ListaNoticias = [
        {
            titulo: "Deu a louca no patrão",
            descricao: "Toda a loja com 2% de desconto"
        },
        {
            titulo: "Deu a louca no patrão",
            descricao: "Toda a loja com 2% de desconto"
        },
        {
            titulo: "Deu a louca no patrão",
            descricao: "Toda a loja com 2% de desconto"
        },
    ]
    
    function renderizarNoticias(){
        let espaco= documet.getElementById ("epacotexto")
    
        let template = "";
    
        for (let index = 0; index < ListaNoticias.length; index++) {
            const noticias = ListaNoticias[index];
            
        template += `<div class="Textosroda">
        <p>${noticias.titulo}</p>
        <p>${noticias.descricao}</p>
    </div>`
        }
    
        espaco.innerHTML = template;
    
    }