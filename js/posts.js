var mainFeedBox = document.querySelector("#main-box");


//Sinceramente esse foi o metodo que satisfazia o que eu queria!, eu entendo mais ou menos o que acontece :<( 
const getPost = async () => { //Esse e' tranquilo faz o request pelo fetch APi >>> XMLHttpRequest!, porem usa de uma promisse para essa resposta 
    const response = await fetch("https://next.json-generator.com/api/json/get/EkyZfHLU_") 
    return response.json() //transforma essa resposta em um JSON
}

const addPosts = async(subject) => { //Mais uma funcao assincrona para adcionar os posts!
    const post = await subject()

    //Aqui comeca o problema, basicamente ao usar post.map um pego post.length, e clono ele em um novo array que posso alterar,
    // -> entao apartir disso coloco em configuracao de div ja pronta, a vantagem desse procedimento. Em suma, para cada item no arry ele roda o codigo!
    const posttemplate = post.map(item => `
    <div id = "${item.username}" class = "outline">
        <div class = "main-initial-box" >     <!-- Foto Peril + Username + little Descprition-->     
            <div class = "main-foto-holder"></div> <!-- colocar img de pefil aqui!-->     
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
                <img id = "love" class= "img-icon" src="img/heart.png" alt = "love" style ="cursor: pointer"><!-- like-->
                    <div style= "margin-left: 10px">
                    <a>21</a>
                    </div>
                </div>
                <div class= "box">
                    <img id= "comment-icon" class= "img-icon" src="img/box_comment.png" alt = "comment" style ="cursor: pointer"> <!-- comments-->
                    <div style= "margin-left: 10px;">
                    <a>23</a>
                    </div>
                </div>
                <div>
                    <img id= "repiu" class= "img-icon" src="img/rePiu.png" alt = "repiu" style ="cursor: pointer"><!-- repiu-->
                </div>
                <div>
                    <img id= "flag" class= "img-icon" src="img/flag.png" alt = "flag" style ="cursor: pointer"><!-- flag! -->
                </div>
                </div>   
            </div>
        </div>
    `).join("") //parte muito importante ela faz a juncao entre as Divs, sen entre as divs fica algo .join("<!-- Acabo div!--!>") 'e uma boa 
    
    mainFeedBox.innerHTML += posttemplate //Ela adciona o que ja tinha mais o novo!
}
    
addPosts(getPost);
