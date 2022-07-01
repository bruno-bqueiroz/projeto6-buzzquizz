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
            <p> Você não criou nenhum quizz ainda :( </p>
              <button onclick="criarQuizz(this)"> Criar Quizz </button>
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
   
        Elemento.innerHTML = `
        <div class="tela3">
          <b>Comece pelo começo</b>
          <input placeholder="Título do seu quizz" class="titulo"></input>
          <input placeholder="URL da imagem do seu quizz" class="url"></input>
          <input placeholder="Quantidade de perguntas do quizz" class="nPerguntas"></input>
          <input placeholder="Quantidade de níveis do quizz" class="nNiveis"></input>
          <button onclick="tela32(this)"> Prosseguir para criar perguntas </button>
        </div>
        `;
    }
  criarQuizz();

  function tela32(){
    let titulo = document.querySelector("input.titulo").value;
    let url= document.querySelector("input.url").value;
    let perguntas= document.querySelector("input.nPerguntas").value;
    let niveis = document.querySelector("input.nNiveis").value;

    if(20 < titulo.length < 65 && perguntas > 2  && niveis > 1){
      let Elemento = document.querySelector(".tela3");
      Elemento.innerHTML = "";
        Elemento.innerHTML = `
          <b>Crie suas perguntas</b>
        <div class="tela32">

          <div class="pergunta">
            <div><b>Pergunta 1</b></div>
              <input placeholder="Texto da pergunta" class="titulo"></input>
              <input placeholder="Cor de fundo da pergunta (URL)" class="url"></input>
          </div>
          <div class="pergunta">
            <div><b>Resposta correta</b></div>
              <input placeholder="Resposta correta" class="titulo"></input>
              <input placeholder="URL da imagem" class="url"></input>
          </div>
          <div class="pergunta">
            <div><b>Respostas incorretas</b></div>
              <input placeholder="Resposta incorreta 1" class="titulo"></input>
              <input placeholder="URL da imagem 1" class="url"></input>
              <input placeholder="Resposta incorreta 2" class="titulo"></input>
              <input placeholder="URL da imagem 2" class="url"></input>
              <input placeholder="Resposta incorreta 3" class="titulo"></input>
              <input placeholder="URL da imagem 3" class="url"></input>
          </div>
          <button onclick="tela33(this)"> Prosseguir para criar níveis </button>
         
        </div>
        `;

    }else return alert("preencher os dados corretamente");

  }
  tela32();

  function tela33(){
    let Elemento = document.querySelector(".quizzes");
   
        Elemento.innerHTML = `
        <div class="tela3">
          <b>Comece pelo começo</b>
          <input placeholder="Título do seu quizz" class="titulo"></input>
          <input placeholder="URL da imagem do seu quizz" class="url"></input>
          <input placeholder="Quantidade de perguntas do quizz" class="nPerguntas"></input>
          <input placeholder="Quantidade de níveis do quizz" class="nNiveis"></input>
          <button onclick="tela33(this)"> Prosseguir para criar perguntas </button>
        </div>
        `;
    }

  



