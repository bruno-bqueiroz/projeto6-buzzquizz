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
      quizzOrganize.innerHTML += `<div class="container"><div class="fotos"><img src="${answer.image}"></div>
                        <div class="respostas">${answer.text}</div>`;
    });
  });
}

function errorQuizz() {
  console.log("nao foi");
}
