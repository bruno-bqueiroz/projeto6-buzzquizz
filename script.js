let container;
let caixa;

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
                <div class ="quizz1">
            
                </div>
            </div>    
        </div>

    `
}
quizz();

let mensagens=[];


function buscarDados(){
    let promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1");
         promessa.then(popularDados);
 
}
buscarDados();

function popularDados(resposta){
   mensagens = resposta.data;  
   console.log(mensagens);
}
popularDados();
