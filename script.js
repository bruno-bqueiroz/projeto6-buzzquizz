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
                <div class ="quizz1">
            
                </div> 
                <div class ="quizz1">
            
                </div>   
            </div>    
        </div>

    `
}
quizz();