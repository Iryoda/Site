var nPost      = document.querySelector("#NewPost");
var modalBg    = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var logoBox    = document.querySelector("#logo-box");
var comentario = document.querySelector(".comment-box");
var btnModal   = document.querySelector(".bt-modal");



//Listeners//
    //Parte da logo
logoBox.addEventListener("mouseover", function(){
    console.log("teste!");
});


logoBox.addEventListener("mouseout", function(){
    console.log("out!");
});

//Parte de adcionar um comentario



nPost.addEventListener("click", function(){
    modalBg.classList.add('modal-bg-active');
});


modalClose.addEventListener("click", function(){
    modalBg.classList.remove('modal-bg-active');
});

btnModal.addEventListener("click", function(){
    var mensagem = comentario.value;

    if(mensagem.length > 140){
        document.querySelector("#demo").innerHTML = "O valor de caracteres excede o limite! Seu post nao sera enviado!";  
    }
    else{
        console.log(mensagem);
        comentario = null;
        modalBg.classList.remove('modal-bg-active');
    }
})


comentario.addEventListener("keyup", () =>{

    var contador = comentario.value.length;  
    if(contador < 140){
        document.querySelector("#demo").style.color = "black";
        document.querySelector("#demo").innerHTML = contador + "/140";
    }
    else{
        document.querySelector("#demo").style.color = "red";
        document.querySelector("#demo").innerHTML = contador + "/140";
        
    }
    
   
});