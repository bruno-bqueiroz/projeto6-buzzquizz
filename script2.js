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
  let quizzQuestions = quizz.data.questions;
  let quizzOrganize = document.querySelector(".conteudo");

  quizzOrganize.innerHTML += `<div class= "quizzHead"><p class="tituloQuizz">${quizz.data.title}</p> <img class="fundo" src="${quizz.data.image}"/> </div>`;
  for (let i = 0; i < quizzQuestions.length; i++) {
    let enterQuestions = document.querySelector(".questoes");

    enterQuestions.innerHTML += `<div class = "perguntas">${quizzQuestions[i].title}</div>
    <div class="cor">${quizzQuestions[i].color}</div>`;
    console.log(quizzQuestions[i].answers);
    const container = document.createElement("div");
    container.classList.add(`respostas-${i}`);
    let respostas1 = document.querySelector(".questoes");
    respostas1.appendChild(container);
    for (let a = 0; a < quizzQuestions[i].answers.length; a++) {
      let quizzAnswers = quizz.data.questions[i].answers;
      console.log(quizz.data.questions[i].answers);
      let enterQuestions = document.querySelector(`.respostas-${i}`);
      enterQuestions.innerHTML += `<div class="answersContent"><img class = "respostas" src="${quizzAnswers[a].image}"> <div class = "answer">${quizzAnswers[a].isCorrectAnswer}</div> <p class="texto">${quizzAnswers[a].text}</p></div>`;
    }
  }
}

function errorQuizz() {
  console.log("nao foi");
}
