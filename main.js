
//spara värdet noofquestion och skriva ut så många frågor som spelare vill ha
//kunna trycka på checkboxes som sparas nånstans(checked)
//kolla ifall checkboxes är true eller false
//spara värde så man ser score i slutet 

// skapar quiz class
class Quiz {
    constructor(name) {
        this.name = name;
        this.noOfQuestions = noOfQuestions;
        this.quests = [];
        this.currentQuestion = 0;
        this.score = 0;
    }
    //metod som tar in värdet name som spelaren skriver in
    setName(){
        this.name = document.getElementById("name").value;
    }
    //metod som tar in hur många frågor som spelaren vill köra
    setnoOfQuestions(){
        this.noOfQuestions = document.getElementById("noOfQuestions").value;
    }
    //metod som huvudsakligen tar index 0 från json och adderar med en
    nextQuestion(){
        this.currentQuestion++
    }
}

//skapar question class
class Question {
    constructor(category, question, answer) {
        this.category = category;
        this.question = question;
        this.answer = answer;    
    }
    //
    addQuests(json) {
        for (let json_questions of json.questions){
            let question = new Question(json_questions.category, json_questions.question, json_questions.answers);
            quiz.quests.push(question);
        }
    }    
}
//funktion som döljer och visar när man trycker på startknappen
function display() {
    document.getElementById("display").style.display = "none";
    document.getElementById('choices').classList.remove('hidden');
}

let json = getJSON("http://www.mocky.io/v2/5d94ed2b2f00002d008ffa3c");
let questionObject = new Question();
let quiz = new Quiz(); 

questionObject.addQuests(json); 

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("next").addEventListener("click", function(e){
 
        quiz.nextQuestion();
    });

    let start = document.getElementById("start");
    
start.addEventListener("click", function(e){
    document.getElementById("question").innerHTML = quiz.quests[quiz.currentQuestion].question;
    document.getElementById("answer1").innerHTML = quiz.quests[quiz.currentQuestion].answer[0].alt;
    document.getElementById("answer2").innerHTML = quiz.quests[quiz.currentQuestion].answer[1].alt;
    document.getElementById("answer3").innerHTML = quiz.quests[quiz.currentQuestion].answer[2].alt;
    document.getElementById("answer4").innerHTML = quiz.quests[quiz.currentQuestion].answer[3].alt;
    quiz.setName();
    quiz.setnoOfQuestions();
    progress();
    console.log( quiz.name,'\n', quiz.noOfQuestions,'\n', question,'\n', answer1,'\n', answer2,'\n', answer3,'\n', answer4);
});

next.addEventListener("click", function(e){
    document.getElementById("question").innerHTML = quiz.quests[quiz.currentQuestion].question;
    document.getElementById("answer1").innerHTML = quiz.quests[quiz.currentQuestion].answer[0].alt;
    document.getElementById("answer2").innerHTML = quiz.quests[quiz.currentQuestion].answer[1].alt;
    document.getElementById("answer3").innerHTML = quiz.quests[quiz.currentQuestion].answer[2].alt;
    document.getElementById("answer4").innerHTML = quiz.quests[quiz.currentQuestion].answer[3].alt;
    quiz.setName();
    quiz.setnoOfQuestions();
    progress();
});
});


let choices = document.getElementById("choices");
choices.addEventListener('click', (event)=>
{
  console.log(event.target.id);

});

function checkAnswer(answer){
    if (answer == questions[currentQuestion].correct){
        score++
    }else{

    }
        
}
//skriver ut vilken fråga man är på 
function progress(){
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + (quiz.currentQuestion+1) + " of " + quiz.noOfQuestions;
}