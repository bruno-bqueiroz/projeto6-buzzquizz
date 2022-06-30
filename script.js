let container;
let caixa = [];
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

function buscarDados() {
  for (let i = 1; i < 9; i++) {
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

function renderizarMensagens() {
  if (dadosQuizz.length <= 0) return null;
  let containerMensagens = document.querySelector(".quizzServidor");

  containerMensagens.innerHTML += `
        <div class="quizz1" onclick="Tela2(this)">    
            <img src="${dadosQuizz.image}">
            <strong>${dadosQuizz.title}</strong>
        </div>
    `;
  console.log(dadosQuizz);
}

renderizarMensagens();

// obter um unico quizz
function apenasUmQuizz() {
  const umQuizz = axios.get(
    "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/1"
  );
  umQuizz.then(openQuizz);
  umQuizz.catch(errorQuizz);
}
apenasUmQuizz();

function openQuizz(quizz) {
  console.log(quizz);
  let quizzQuestions = quizz.data.questions;
  let quizzOrganize = document.querySelector(".conteudo");
  quizzOrganize.innerHTML = "";
  quizzOrganize.innerHTML += `<div class= "quizzHead"><p class="tituloQuizz">${quizz.data.title}</p> <img class="fundo" src="${quizz.data.image}"/> </div>`;
  quizzQuestions.map((question) => {
    quizzOrganize.innerHTML += `<div class = "questoes">${question.title} </div>
        <div class="cor">${question.color}</div>`;
    question.answers.map((answer) => {
      quizzOrganize.innerHTML += `<div class="fotos"><img src="${answer.image}"></div>
            <div class="respostas">${answer.text}</div>`;
    });
  });
}

function errorQuizz() {
  console.log("nao foi");
}
