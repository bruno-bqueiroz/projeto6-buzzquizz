let container;
let caixa = [];
let dadosQuizzUsuario = [];
let dadosQuizz = [];
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

function corpo() {
  container = document.querySelector("div");
  container.innerHTML = `
        <div class="topo">
            <b>BuzzQuizz</b>
        </div>
                     
    `;
}
corpo();

function quizz() {
 
  container.innerHTML += `
        <div class="quizzes">
            <div class="quizzUsuario">
            </div>
           
            <div class="quizzServidor">      
            </div>
          </div>    
    `;
    renderizarMensagensUsuario();
  renderizarMensagens();
  
  
}
quizz();

function buscarDados() {
  for (let i = 1; i < 10; i++) {
    let promessa = axios.get(
      `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${i}`
    );
    promessa.then(popularDados);
  }
}
buscarDados();

function popularDados(resposta) {
  dadosQuizz = resposta?.data;
  renderizarMensagens();
}
popularDados();


// quizzes do servidor
function renderizarMensagens() {
  if (dadosQuizz.length <= 0) return null;
  let containerMensagens = document.querySelector(".quizzServidor");
  containerMensagens.innerHTML += `
        <div class="quizz1" onclick="Tela2(this)">    
            <img src="${dadosQuizz.image}">
            <strong>${dadosQuizz.title}</strong>
        </div>
    `;
}
renderizarMensagens();


// quizzes do usuário
function renderizarMensagensUsuario() {
    if (dadosQuizzUsuario.length <= 0) {
        let containerMensagensUsuario = document.querySelector(".quizzUsuario");
        containerMensagensUsuario.innerHTML = "";
        containerMensagensUsuario.innerHTML = `
          <div class="vazio">    
            <p> Você não criou nenhum </b> quizz ainda :( </p>
              <button onclick="criarQuizz(quizz)"> Criar Quizz </button>
          </div>
      `;
      return;

    }
    let containerMensagensUsuario = document.querySelector(".quizzUsuario");
  
    containerMensagensUsuario.innerHTML += `
          <div class="quizz1" onclick="quizDoUsuario()">    
              <img src="${dadosQuizzUsuario.image}">
              <strong>${dadosQuizzUsuario.title}</strong>
          </div>
      `;
      criarQuizz();
  
  }
  
  renderizarMensagensUsuario();


  // terceira tela
  function criarQuizz(elemento){
    let Elemento = document.querySelector(".quizzes");
   //Elemento.innerHTML = "";

    


    }
  criarQuizz();



