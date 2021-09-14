var index = 0,
    correct,
    nextButton = document.getElementById('Next'),
    StartButton = document.getElementById('Start'),
    buttons = []
    
var GenerateQuiz = () => {
    correct = 0;
    nextButton.style = 'display:none';
StartButton.style = 'display:none';
generateQuestion(index);
nextButton.onclick = () => {generateQuestion()}
    }
function generateQuestion(){
    var container = document.querySelector('.container');
    var question = questions1[index];
    Title = document.createTextNode(question.question);
    Title.className = 'ProperQuestion';
    container.appendChild(Title);
    for(option of question.options){
        var Btn = document.createElement('button');
            Btn.innerText = option;
            Btn.value = option;
            Btn.classList.add('button','options');
            Btn.style.background = 'white'; 
        container.appendChild(Btn);
        buttons.push(Btn);
        nextButton.style.display = 'none';
        CheckCorrect(Btn,question);}
    index++;
    if (index == questions1.length){
        endquiz(container);
    }
}
function CheckCorrect(button, question){
    question = question;
    Btn = button;
    console.log(question)
    if (Btn.value === question.correct){
        Btn.onclick = () =>{
        buttons.forEach(Btn => Btn.disabled = true);
        nextButton.style.display = 'inline';
        button.style.background = 'green';
        correct++
        }
       }
       else{
       Btn.onclick = () =>{
        buttons.forEach(Btn => Btn.disabled = true);
           nextButton.style.display = 'inline';
           button.style.background = 'red';
        }
       }
    }
function endquiz(element){ 
   var name = element;
   nextButton.innerText = 'end quiz';
   index = 0;
   nextButton.onclick = () =>{
       //nextButton.style = 'display:none';
       while(name.firstChild){
           name.removeChild(name.lastChild);
       }
       let previous = 0;
       var score = document.createTextNode('hai finito il quiz con un punteggio di '+ (correct) +'/'+ questions1.length)
            name.appendChild(score);
            nextButton.innerText = 'ricomincia il quiz';
            nextButton.onclick = () => {
                name.removeChild(score)
                nextButton.innerText = 'prossimo';
                GenerateQuiz();
            }
            StartButton.style.display = 'inline-block';
            StartButton.innerText = 'Ritorna alla pagina principale';
            StartButton.onclick = () => {
                window.open('landing-page.html');
            }
   }
}
