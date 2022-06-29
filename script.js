let container;
let caixa = [];
let dadosQuizz=[];
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

function corpo(){
    container = document.querySelector("div");
    container.innerHTML = `
        <div class="topo">
            <b>BuzzQuizz</b>
        </div>
                     
    `
}
corpo();

function quizz (){
    container.innerHTML += `
        <div class ="quizzes">
            <div class ="quizzUsuario">
            </div>
           
            <div class ="quizzServidor">
                
            
                </div>
            </div>    
        </div>

    `;
    renderizarMensagens();
}
quizz();


function buscarDados(){
    let promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1`);
    promessa.then(popularDados);
}
buscarDados();


function popularDados(resposta){
    dadosQuizz = resposta.data;  
    renderizarMensagens();
    console.log(dadosQuizz);
}
popularDados();

function renderizarMensagens() {
    let containerMensagens = document.querySelector(".quizzServidor");
       
        containerMensagens.innerHTML = `
        <div class="quizz1">    
            <img src="${dadosQuizz.image}">
            <strong>${dadosQuizz.title}</strong>
        </div>
    `;

}

renderizarMensagens();