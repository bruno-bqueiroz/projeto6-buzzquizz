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


  // terceira tela. criar quizz
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

 // terceira tela. criar as perguntas e respostas
  function tela32(){
    let titulo = document.querySelector("input.titulo").value;
    let url;
    try {
      let urls = new URL(document.querySelector("input.url").value);
      url = document.querySelector("input.url").value;
      console.log("Valid URL!");
    } catch (err) {
      console.log("Invalid URL!");
    }
    let perguntas= document.querySelector("input.nPerguntas").value;
    let niveis = document.querySelector("input.nNiveis").value;

    if(/*20 < titulo.length < 65 && perguntas > 2  && niveis > 1 && url*/true){
      let Elemento = document.querySelector(".tela3");
      Elemento.innerHTML = "";
        Elemento.innerHTML = `
          <b>Crie suas perguntas</b>
        <div class="tela32">

          <div class="pergunta">
            <div><b>Pergunta 1</b></div>
              <input placeholder="Texto da pergunta" class="Textodapergunta"></input>
              <input placeholder="Cor de fundo da pergunta (URL)" class="Cordefundodapergunta"></input>
          </div>
          <div class="pergunta">
            <div><b>Resposta correta</b></div>
              <input placeholder="Resposta correta" class="Respostacorreta"></input>
              <input placeholder="URL da imagem" class="URLdaimagem"></input>
          </div>
          <div class="pergunta">
            <div><b>Respostas incorretas</b></div>
              <input placeholder="Resposta incorreta 1" class="Respostaincorreta1"></input>
              <input placeholder="URL da imagem 1" class="URLdaimagem1"></input>
              <input placeholder="Resposta incorreta 2" class="Respostaincorreta2"></input>
              <input placeholder="URL da imagem 2" class="URLdaimagem2"></input>
              <input placeholder="Resposta incorreta 3" class="Respostaincorreta3"></input>
              <input placeholder="URL da imagem 3" class="URLdaimagem3"></input>
          </div>
        </div>
        <div class="caixa-pergunta">
          <div class="caixa-pergunta2">
            <p>Pergunta 2</p>
            <img src="./imagens/create-icon-26.jpg" onclick="tela322(this)">
          </div>
        </div>
        <div class="caixa-pergunta1">
          <div class="caixa-pergunta2">
           <p>Pergunta 3</p>
           <img src="./imagens/create-icon-26.jpg" onclick="tela323(this)">
          </div>
        </div>
        <button onclick="tela33(this)"> Prosseguir para criar níveis </button>
        `;

    } else return alert("preencher os dados corretamente");

  }
  tela32();
  function tela322(){
    let Elemento = document.querySelector(".caixa-pergunta");
      Elemento.innerHTML = `
      <div class="tela32">

      <div class="pergunta">
        <div><b>Pergunta 2</b></div>
          <input placeholder="Texto da pergunta" class="Textodapergunta"></input>
          <input placeholder="Cor de fundo da pergunta (URL)" class="Cordefundodapergunta"></input>
      </div>
      <div class="pergunta">
        <div><b>Resposta correta</b></div>
          <input placeholder="Resposta correta" class="Respostacorreta"></input>
          <input placeholder="URL da imagem" class="URLdaimagem"></input>
      </div>
      <div class="pergunta">
        <div><b>Respostas incorretas</b></div>
          <input placeholder="Resposta incorreta 1" class="Respostaincorreta1"></input>
          <input placeholder="URL da imagem 1" class="URLdaimagem1"></input>
          <input placeholder="Resposta incorreta 2" class="Respostaincorreta2"></input>
          <input placeholder="URL da imagem 2" class="URLdaimagem2"></input>
          <input placeholder="Resposta incorreta 3" class="Respostaincorreta3"></input>
          <input placeholder="URL da imagem 3" class="URLdaimagem3"></input>
      </div>
    </div>
    `;

  }
  function tela323(){

    let Elemento = document.querySelector(".caixa-pergunta1");
      Elemento.innerHTML = `
      <div class="tela32">

      <div class="pergunta">
        <div><b>Pergunta 3</b></div>
          <input placeholder="Texto da pergunta" class="Textodapergunta"></input>
          <input placeholder="Cor de fundo da pergunta (URL)" class="Cordefundodapergunta"></input>
      </div>
      <div class="pergunta">
        <div><b>Resposta correta</b></div>
          <input placeholder="Resposta correta" class="Respostacorreta"></input>
          <input placeholder="URL da imagem" class="URLdaimagem"></input>
      </div>
      <div class="pergunta">
        <div><b>Respostas incorretas</b></div>
          <input placeholder="Resposta incorreta 1" class="Respostaincorreta1"></input>
          <input placeholder="URL da imagem 1" class="URLdaimagem1"></input>
          <input placeholder="Resposta incorreta 2" class="Respostaincorreta2"></input>
          <input placeholder="URL da imagem 2" class="URLdaimagem2"></input>
          <input placeholder="Resposta incorreta 3" class="Respostaincorreta3"></input>
          <input placeholder="URL da imagem 3" class="URLdaimagem3"></input>
      </div>
    </div>
    `;


  }
 // terceira tela. criar os niveis do quizz
  function tela33(){
    let Textodapergunta = document.querySelector("input.Textodapergunta").value;
    let Cordefundodapergunta = document.querySelector("input.Cordefundodapergunta").value;
    let Respostacorreta = document.querySelector("input.Respostacorreta").value;
    let URLdaimagem = document.querySelector("input.URLdaimagem").value;
    let Respostaincorreta1 = document.querySelector("input.Respostaincorreta1").value;
    let URLdaimagem1 = document.querySelector("input.URLdaimagem1").value;
    let Respostaincorreta2 = document.querySelector("input.Respostaincorreta2").value;
    let URLdaimagem2 = document.querySelector("input.URLdaimagem2").value;
    let Respostaincorreta3 = document.querySelector("input.Respostaincorreta3").value;
    let URLdaimagem3 = document.querySelector("input.URLdaimagem3").value;

    if(true){     
    let Elemento = document.querySelector(".tela3");
   
        Elemento.innerHTML = `
        <b>Agora, decida os níveis!</b>
        <div class="tela33">

          <div class="pergunta">
            <div><b>Nível 1</b></div>
              <input placeholder="Título do nível" class="Títulodonível"></input>
              <input placeholder="% de acerto mínima" class="acertominima"></input>
              <input placeholder="URL da imagem do nível" class="imagemdonivel"></input>
              <input placeholder="Descrição do nível" class="descriçãodonivel"></input>
          </div>
          <div class="caixa-pergunta">
          <p>Nível 2</p>
          <img src="./imagens/create-icon-26.jpg" onclick="nivel2(this)">
        </div>
            <button onclick="tela34(this)"> Finalizar Quizz </button>
        </div>
        `;

    } else return alert("preencher os dados corretamente");

  }
    tela33();

    function tela34(){
      let titulodonível = document.querySelector("input.Títulodonível").value;
      let acertominima = document.querySelector("input.acertomínima").value;
      let imagemdonível = document.querySelector("input.imagemdonível").value;
      let descriçãodonivel = document.querySelector("input.Descriçãodonível").value;
      
      if(titulodonível.length > 10  && 0 > acertominima <101   && descriçãodonivel.length > 30 && acertominima == 0 || acertominima == 0){ 
      let Elemento = document.querySelector(".quizzes");

      Elemento.innerHTML = `
        <b>Seu quizz está pronto!</b>
        <div class="tela34">

          <div class="quizz1" onclick="Tela2(this)">    
            <img src="${dadosQuizz.image}">
            <strong>${dadosQuizz.title}</strong>
          </div>
          <button onclick="tela34(this)"> Acessar Quizz </button>
        <div class="botaoCinza"><button onclick="goHome(this)"> Voltar pra home </button></div>
        </div>
        
        `;
      } else return alert("preencher os dados corretamente");

    }
    tela34();
    // retorna a pagina inicial
    function goHome() {
      window.location.reload();
  }



