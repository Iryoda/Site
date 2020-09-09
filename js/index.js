var nPost      = document.querySelector("#NewPost");
var modalBg    = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var logoBox    = document.querySelector("#logo-box");
var comentario = document.querySelector(".comment-box");
var btnModal   = document.querySelector(".bt-modal");
var search     = document.querySelector("#search-id");
var topFeed    = document.querySelector("#top-feed");

var a = 0;

//Listeners//
//----------------------- Parte da logo -----------------------
logoBox.addEventListener("mouseover", function(){
    console.log("teste!");
});


logoBox.addEventListener("mouseout", function(){
    console.log("out!");
});

//----------------------- Parte de ativar e desativar modal -----------------------


nPost.addEventListener("click", function(){
    modalBg.classList.add('modal-bg-active');
});


modalClose.addEventListener("click", function(){
    modalBg.classList.remove('modal-bg-active');
});

//----------------------- Adcionar Comentario -----------------------


btnModal.addEventListener("click", function(){
    var mensagem = comentario.value;

    if(mensagem.length > 140 || mensagem.length == 0 ){
        document.querySelector("#demo").innerHTML = "O valor de caracteres excede o limite! Seu post nao será enviado!";  
    }
    else{
        modalBg.classList.remove("modal-bg-active");
        addOnFeed(mensagem);
    }
})

//----------------------- Parte da box de comentario -----------------------

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

//----------------------- Parte de Search -----------------------
search.addEventListener("input", () =>{
    console.log(search.value);
    var user = document.querySelectorAll(".outline");

    if( search.value.length > 0){
        for( var i = 0; i < user.length; i++){
            var users = user[i];
            var name = users.querySelector(".username");
            var text = name.textContent;
            var expressao = new RegExp(search.value, "i")
            if( !expressao.test(text)){
                users.classList.add("hidden");
            }else{
                users.classList.remove("hidden");
            }
        }
    }else{
        for (var i = 0; i < user.length; i++){
            var users = user[i];
            users.classList.remove("hidden");
        }
    }
});

//----------------------- Functions -----------------------
function addOnFeed(msg){
    a = ++a;
    var name = "Host";
    var username = "@hostcomment";
    var imagem = "./img/unk.png";
    addPostsOwner(name, username, msg, imagem);
}


//A partir daqui não foi uma forma inteligente de implemenater meu codigo, precisaria importar do Js post.

const addPostsOwner = (name, username, mensagem, imagem) =>{
    const postStuff = `
    <div id = "add${a}" class = "outline">
        <div class = "main-initial-box" >     <!-- Foto Peril + Username + little Descprition-->     
            <div class = "main-foto-holder"><img src ="${checaNull(imagem, "img/unk.png")}" alt ="Foto" height= 100%></div> <!-- colocar img de pefil aqui!-->     
            <div class = "main-description-box">
                <div class = "username">${name}</div>
                <div class = "descprition">${username}</div>
            </div>
            </div>    

            <div class ="main-coment-box"> <!-- Boxy com comenta'rio-->
            <div class= "comment">${mensagem}</div>
            </div>
            <!-- <div class ="main-img-holder"></div> /Image Holder colocar a url aqui da imagem anexada!-->
            <div class = "main-interactions-box"> <!-- Icones e o krl-->
            <div class = "icons-box">
                <div class= "box">
                <img class= "love-icon" src="img/heart.png" onclick ="like(user${a})" alt = "love" style ="cursor: pointer"><!-- like-->
                    <div class= "love-icon-text" style= "margin-left: 10px">
                    <span id= "span-user${a}"></span>
                    </div>
                </div>
                <div class= "box">
                    <img class= "comment-icon" src="img/box_comment.png" alt = "comment" style ="cursor: pointer"> <!-- comments-->
                    <div class= "comment-icon-text" style= "margin-left: 10px;">
                    <span></span>
                    </div>
                </div>
                <div class = "box">
                    <img class= "repiu-icon" src="img/rePiu.png" alt = "repiu" style ="cursor: pointer"><!-- repiu-->
                </div>
                <div class = "box">
                    <img class= "flag-icon" src="img/flag.png" alt = "flag" style ="cursor: pointer"><!-- flag! -->
                </div>
                </div>   
            </div>
        </div>`
        topFeed.innerHTML += postStuff
}

function checaNull(item, change){
    if (item == 0)
    {   
        return change;
    }
    else{
        return item;
    }
} 
