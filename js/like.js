
function like(id) {
    var location = document.querySelector("#span-" + id);
    var text     = location.textContent;
    let valor    = parseInt(text);

    if( !location.classList.contains("marcador") )
    {
        valor = ++valor;
        location.innerHTML = `${valor}`;
        location.classList.add("marcador");
    } 
    else{
        valor = --valor;
        location.innerHTML = `${valor}`;
        location.classList.remove("marcador");
    }

}


