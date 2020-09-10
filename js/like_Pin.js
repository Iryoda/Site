
function like(method, id) {
    var img      = document.querySelector(".love-icon-" + method + id);
    var location = document.querySelector("#" + method + id);
    var text     = location.textContent;
    let valor    = parseInt(text);

    if( !img.classList.contains("marcador") )
    {   
        img.classList.add("marcador");
        img.setAttribute("src", "img/heart_painteds.png");
        valor = ++valor;
        location.innerHTML = `${valor}`;
    } 
    else{
        img.classList.remove("marcador");
        img.setAttribute("src", "img/Hart2.png");
        valor = --valor;
        location.innerHTML = `${valor}`;
    }

}


function deleteComment(nome, id){
    var location = document.querySelector("#" + nome + id);

    if(nome == "own")
    location.innerHTML = "Seu piu foi apagado.";
    else{
        location.innerHTML = "Esse piu não aparecerá mais para você.";
    }   
}
