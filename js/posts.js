var mainFeedBox = document.querySelector("#main-box");
var count = 0;

function checaNull(item, change){ //Só existe por causa do Guilherme nmrl
    if (item == 0)
    {   
      return change;
    }
    else{
        return item;
    }
} 
//Sinceramente esse foi o metodo que satisfazia o que eu queria!, eu entendo mais ou menos o que acontece :<( 
const getPost = async () => { //Esse e' tranquilo faz o request pelo fetch APi >>> XMLHttpRequest!, porem usa de uma promisse para essa resposta 
    const response = await fetch("https://next.json-generator.com/api/json/get/EkyZfHLU_") 
    return response.json() //transforma essa resposta em um JSON
}

const addPosts = async(subject) => { //Mais uma funcao assincrona para adcionar os posts!
    const post = await subject

    //Aqui comeca o problema, basicamente ao usar post.map eu pego post.length, e clono ele em um novo array que posso alterar,
    // -> entao apartir disso coloco em uma configuracao de div ja pronta, que é a vantagem desse procedimento. Em suma, para cada item no arry ele roda o codigo!
    const posttemplate = post.map(item => `
    <div id = "${contador(count)}" class = "outline">
        <div class = "main-initial-box" >     <!-- Foto Peril + Username + little Descprition-->     
            <div class = "main-foto-holder"><img src ="${checaNull(item.imagem, "img/unk.png")}" alt ="Foto" height= 100%></div> <!-- colocar img de pefil aqui!-->     
            <div class = "main-description-box">
                <div class = "username">${item.nome}</div>
                <div class = "descprition">${item.username}</div>
            </div>
            </div>    

            <div class ="main-coment-box"> <!-- Boxy com comenta'rio-->
            <div class= "comment">${item.mensagem}</div>
            </div>
            <!-- <div class ="main-img-holder"></div> /Image Holder colocar a url aqui da imagem anexada!-->
            <div class = "main-interactions-box"> <!-- Icones e o krl-->
            <div class = "icons-box">
                <div class= "box">
                <img class= "love-icon" src="img/heart.png" onclick ="like(${count})" alt = "love" style ="cursor: pointer"><!-- like-->
                    <div class= "love-icon-text" style= "margin-left: 10px">
                    <span id= "span-${count}" >${parseInt(Math.random()*100)}</span>
                    </div>
                </div>
                <div class= "box">
                    <img class= "comment-icon" src="img/box_comment.png" alt = "comment" style ="cursor: pointer"> <!-- comments-->
                    <div class= "comment-icon-text" style= "margin-left: 10px;">
                    <span>${parseInt(Math.random()*20)}</span>
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
        </div>
    `).join("") //parte muito importante ela faz a juncao entre as Divs, sen entre as divs fica algo .join("<!-- Acabo div!--!>") 'e uma boa 
    
    mainFeedBox.innerHTML += posttemplate //Ela adciona o que ja tinha mais o novo!
    console.log(post)
}
    
addPosts(getPost());

function contador(id){
   count = ++count;
   return count;
}

