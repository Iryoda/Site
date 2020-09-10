var nPost      = document.querySelector("#NewPost");
var NewPost    = document.querySelector("#newpost");
var modalBg    = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var logoBox    = document.querySelector("#logo-box");
var comentario = document.querySelector(".comment-box");
var btnModal   = document.querySelector(".bt-modal");
var search     = document.querySelector("#search-id");
var topFeed    = document.querySelector("#top-feed");
var hambIcon   = document.querySelector(".hamb-icon");
var ListaMenu  = document.querySelector(".menu-list");

var a = 0;

//Listeners//
//----------------------- Parte da logo -----------------------
hambIcon.addEventListener("click", () =>{
    if(!ListaMenu.classList.contains("Chidden"))
    {
        ListaMenu.classList.add("Chidden");
    }else{
        ListaMenu.classList.remove("Chidden");
    }
})
/* Isso seria legal, mas melhor ficar com o icone
logoBox.addEventListener("mouseover", function(){
    ListaMenu.classList.remove("Chidden");
});


logoBox.addEventListener("mouseout", function(){
    ListaMenu.classList.add("Chidden");
});
*/
//----------------------- Parte de ativar e desativar modal -----------------------
NewPost.addEventListener("click", function(){
    modalBg.classList.add('modal-bg-active');
});


nPost.addEventListener("click", function(){
    modalBg.classList.add('modal-bg-active');
});


modalClose.addEventListener("click", function(){
    modalBg.classList.remove('modal-bg-active');
});

//----------------------- Adcionar Comentario -----------------------


btnModal.addEventListener("click", function(){
    var mensagem = comentario.value;

    if(mensagem.length > 140 ){
        document.querySelector(".status").innerHTML = "O valor de caracteres excede o limite! Seu post nao será enviado!";  
        }else if (mensagem.length == 0 ){
            document.querySelector(".status").style.color = "red";
            document.querySelector(".status").innerHTML = "Voce precisa escrever algo para poder enviar!";  
            }else{
                    modalBg.classList.remove("modal-bg-active");
                    addOnFeed(mensagem);
                    comentario.value = "";
                }
})

//----------------------- Parte da box de comentario -----------------------

comentario.addEventListener("keyup", () =>{

    var contador = comentario.value.length;  
    if(contador < 140){
        document.querySelector(".status").style.color = "black";
        document.querySelector(".status").innerHTML = contador + "/140";
    }
    else{
        document.querySelector(".status").style.color = "red";
        document.querySelector(".status").innerHTML = contador + "/140";
        
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
                users.classList.add("Chidden");
            }else{
                users.classList.remove("Chidden");
            }
        }
    }else{
        for (var i = 0; i < user.length; i++){
            var users = user[i];
            users.classList.remove("Chidden");
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
    <div id = "own${a}" class = "outline">
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
                <img class= "love-icon-span-user${a}" src="img/Hart2.png" onclick ="like(\'span-user\',${a})" alt = "love" style ="cursor: pointer"><!-- like-->
                    <div class= "love-icon-text" style= "margin-left: 10px">
                    <span id= "span-user${a}">0</span>
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
                    <img class= "flag-icon" src="img/Vector1.png" onclick = "deleteComment(\'own\',${a})" alt = "flag" style ="cursor: pointer"><!-- flag! -->
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
