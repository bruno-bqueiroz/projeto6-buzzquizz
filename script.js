let container;
let caixa = [];
let dadosQuizzUsuario = [];
let dadosQuizz = [];
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
let titulo;
let url;
let perguntas;
let niveis;

let Textodapergunta;
let Cordefundodapergunta;
let Respostacorreta;
let URLdaimagem;
let Respostaincorreta1;
let URLdaimagem1;
let Respostaincorreta2;
let URLdaimagem2;
let Respostaincorreta3;
let URLdaimagem3;

let Textodapergunta1;
let Cordefundodapergunta1;
let Respostacorreta1;
let URLdaimagem10;
let Respostaincorreta11;
let URLdaimagem11;
let Respostaincorreta21;
let URLdaimagem21;
let Respostaincorreta31;
let URLdaimagem31;

let Textodapergunta2;
let Cordefundodapergunta2;
let Respostacorreta2;
let URLdaimagem20;
let Respostaincorreta12;
let URLdaimagem12;
let Respostaincorreta22;
let URLdaimagem22;
let Respostaincorreta32;
let URLdaimagem32;

let titulodonível;
let acertominima;
let imagemdonivel;
let descricaodonivel;

let titulodonível1;
let acertominima1;
let imagemdonivel1;
let descricaodonivel1;  

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






  // terceira tela.1 criar quizz
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


 // terceira tela.2 criar as perguntas e respostas
  function tela32(){
     titulo = document.querySelector("input.titulo").value;
    try {
      let urls = new URL(document.querySelector("input.url").value);
      url = document.querySelector("input.url").value;
      console.log("Valid URL!");
    } catch (err) {
      console.log("Invalid URL!");
    }
     perguntas= document.querySelector("input.nPerguntas").value;
     niveis = document.querySelector("input.nNiveis").value;

    if(20 < titulo.length < 65 && perguntas > 2  && niveis > 1 && url){
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
          <input placeholder="Texto da pergunta" class="Textodapergunta1"></input>
          <input placeholder="Cor de fundo da pergunta (URL)" class="Cordefundodapergunta1"></input>
      </div>
      <div class="pergunta">
        <div><b>Resposta correta</b></div>
          <input placeholder="Resposta correta" class="Respostacorreta1"></input>
          <input placeholder="URL da imagem" class="URLdaimagem10"></input>
      </div>
      <div class="pergunta">
        <div><b>Respostas incorretas</b></div>
          <input placeholder="Resposta incorreta 1" class="Respostaincorreta11"></input>
          <input placeholder="URL da imagem 1" class="URLdaimagem11"></input>
          <input placeholder="Resposta incorreta 2" class="Respostaincorreta21"></input>
          <input placeholder="URL da imagem 2" class="URLdaimagem21"></input>
          <input placeholder="Resposta incorreta 3" class="Respostaincorreta31"></input>
          <input placeholder="URL da imagem 3" class="URLdaimagem31"></input>
      </div>
    </div>
    `;

  }
  tela322();
  function tela323(){

    let Elemento = document.querySelector(".caixa-pergunta1");
      Elemento.innerHTML = `
      <div class="tela32">

      <div class="pergunta">
        <div><b>Pergunta 3</b></div>
          <input placeholder="Texto da pergunta" class="Textodapergunta2"></input>
          <input placeholder="Cor de fundo da pergunta (URL)" class="Cordefundodapergunta2"></input>
      </div>
      <div class="pergunta">
        <div><b>Resposta correta</b></div>
          <input placeholder="Resposta correta" class="Respostacorreta2"></input>
          <input placeholder="URL da imagem" class="URLdaimagem20"></input>
      </div>
      <div class="pergunta">
        <div><b>Respostas incorretas</b></div>
          <input placeholder="Resposta incorreta 1" class="Respostaincorreta12"></input>
          <input placeholder="URL da imagem 1" class="URLdaimagem12"></input>
          <input placeholder="Resposta incorreta 2" class="Respostaincorreta22"></input>
          <input placeholder="URL da imagem 2" class="URLdaimagem22"></input>
          <input placeholder="Resposta incorreta 3" class="Respostaincorreta32"></input>
          <input placeholder="URL da imagem 3" class="URLdaimagem32"></input>
      </div>
    </div>
    `;
  }
  tela323();
 // terceira tela.3 criar os niveis do quizz
  function tela33(){
     Textodapergunta = document.querySelector("input.Textodapergunta").value;
     Cordefundodapergunta = document.querySelector("input.Cordefundodapergunta").value;
     Respostacorreta = document.querySelector("input.Respostacorreta").value;
     URLdaimagem = document.querySelector("input.URLdaimagem").value;
     Respostaincorreta1 = document.querySelector("input.Respostaincorreta1").value;
     URLdaimagem1 = document.querySelector("input.URLdaimagem1").value;
     Respostaincorreta2 = document.querySelector("input.Respostaincorreta2").value;
     URLdaimagem2 = document.querySelector("input.URLdaimagem2").value;
     Respostaincorreta3 = document.querySelector("input.Respostaincorreta3").value;
     URLdaimagem3 = document.querySelector("input.URLdaimagem3").value;
    
     Textodapergunta1 = document.querySelector("input.Textodapergunta1").value;
     Cordefundodapergunta1 = document.querySelector("input.Cordefundodapergunta1").value;
     Respostacorreta1 = document.querySelector("input.Respostacorreta1").value;
     URLdaimagem10 = document.querySelector("input.URLdaimagem10").value;
     Respostaincorreta11 = document.querySelector("input.Respostaincorreta11").value;
     URLdaimagem11 = document.querySelector("input.URLdaimagem11").value;
     Respostaincorreta21 = document.querySelector("input.Respostaincorreta21").value;
     URLdaimagem21 = document.querySelector("input.URLdaimagem21").value;
     Respostaincorreta31 = document.querySelector("input.Respostaincorreta31").value;
     URLdaimagem31 = document.querySelector("input.URLdaimagem31").value;

     Textodapergunta2 = document.querySelector("input.Textodapergunta2").value;
     Cordefundodapergunta2 = document.querySelector("input.Cordefundodapergunta2").value;
     Respostacorreta2 = document.querySelector("input.Respostacorreta2").value;
     URLdaimagem20 = document.querySelector("input.URLdaimagem20").value;
     Respostaincorreta12 = document.querySelector("input.Respostaincorreta12").value;
     URLdaimagem12 = document.querySelector("input.URLdaimagem12").value;
     Respostaincorreta22 = document.querySelector("input.Respostaincorreta22").value;
     URLdaimagem22 = document.querySelector("input.URLdaimagem22").value;
     Respostaincorreta32 = document.querySelector("input.Respostaincorreta32").value;
     URLdaimagem32 = document.querySelector("input.URLdaimagem32").value;

    if(Textodapergunta.length >= 20 && Cordefundodapergunta.length == 7 && Respostacorreta.length != 0
      && Respostaincorreta1.length != 0 && Respostaincorreta2.length != 0 && Respostaincorreta3.length != 0
      && URLdaimagem.length != 0 && URLdaimagem1.length != 0 && URLdaimagem2.length != 0 && URLdaimagem3.length != 0){     
    let Elemento = document.querySelector(".tela3");
   
        Elemento.innerHTML = `
        <b>Agora, decida os níveis!</b>
        <div class="tela33">

          <div class="pergunta">
            <div><b>Nível 1</b></div>
              <input placeholder="Título do nível" class="Títulodonível"></input>
              <input placeholder="% de acerto mínima" class="acertominima"></input>
              <input placeholder="URL da imagem do nível" class="imagemdonivel"></input>
              <input placeholder="Descrição do nível" class="descricaodonivel"></input>
          </div>
          <div class="caixa-pergunta">
          <p>Nível 2</p>
          <img src="./imagens/create-icon-26.jpg" onclick="tela332(this)">
        </div>
            <button onclick="enviarMensagem(); tela34(this)"> Finalizar Quizz </button>
        </div>
        `;

    } else return alert("preencher os dados corretamente");

  }
    tela33();
  function tela332() {
    let Elemento = document.querySelector(".caixa-pergunta");
   
        Elemento.innerHTML = `
        
        <div class="tela33">

          <div class="pergunta">
            <div><b>Nível 2</b></div>
              <input placeholder="Título do nível" class="Títulodonível1"></input>
              <input placeholder="% de acerto mínima" class="acertominima1"></input>
              <input placeholder="URL da imagem do nível" class="imagemdonivel1"></input>
              <input placeholder="Descrição do nível" class="descricaodonivel1"></input>
          </div>
        `;
  }
  tela332();
  function enviarMensagem() {
    titulodonível = document.querySelector("input.Títulodonível").value;
    acertominima = document.querySelector("input.acertominima").value;
    imagemdonivel = document.querySelector("input.imagemdonivel").value;
    descricaodonivel = document.querySelector("input.descricaodonivel").value;

    titulodonível1 = document.querySelector("input.Títulodonível1").value;
    acertominima1 = document.querySelector("input.acertominima1").value;
    imagemdonivel1 = document.querySelector("input.imagemdonivel1").value;
    descricaodonivel1 = document.querySelector("input.descricaodonivel1").value;
   

   axios.post(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes`, {
     
       title: titulo,
       image: url,
       questions: [
         {
           title: Textodapergunta,
           color: Cordefundodapergunta,
           answers: [
             {
               text: Respostacorreta,
               image: URLdaimagem,
               isCorrectAnswer: true
             },
             {
               text: Respostaincorreta1,
               image: URLdaimagem1,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta2,
               image: URLdaimagem2,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta3,
               image: URLdaimagem3,
               isCorrectAnswer: false
             }
           ]
         },
         {
           title: Textodapergunta1,
           color: Cordefundodapergunta1,
           answers: [
             {
               text: Respostacorreta1,
               image: URLdaimagem10,
               isCorrectAnswer: true
             },
             {
               text: Respostaincorreta11,
               image: URLdaimagem11,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta21,
               image: URLdaimagem21,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta31,
               image: URLdaimagem31,
               isCorrectAnswer: false
             }
           ]
         },
         {
           title: Textodapergunta2,
           color: Cordefundodapergunta2,
           answers: [
             {
               text: Respostacorreta2,
               image: URLdaimagem20,
               isCorrectAnswer: true
             },
             {
               text: Respostaincorreta12,
               image: URLdaimagem12,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta22,
               image: URLdaimagem22,
               isCorrectAnswer: false
             },
             {
               text: Respostaincorreta32,
               image: URLdaimagem32,
               isCorrectAnswer: false
             }
           ]
         }
       ],
       levels: [
         {
           title: titulodonível,
           image: imagemdonivel,
           text: descricaodonivel,
           minValue: Number(acertominima)
         },
         {
           title: titulodonível1,
           image: imagemdonivel1,
           text: descricaodonivel1,
           minValue: Number(acertominima1)
         }
       ]
     
   });
   console.log("FOi");
 }
 enviarMensagem();


// tela final de criação do quizz
    function tela34(){
       
      
      if(titulodonível.length > 10  && descricaodonivel.length > 30 && acertominima == 0 || acertominima1 == 0){ 
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



