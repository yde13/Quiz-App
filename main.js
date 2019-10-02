
//skapa currentquestion +1 som skriver ut frågor när man trycker på knapp
//få ut hur många frågor man svarat på 
//spara värde så man ser score i slutet
//kunna trycka på checkboxes som sparas nånstans

class Quiz {
    constructor(name) {
        this.name = name;
        this.noOfQuestions = noOfQuestions;
        this.quests = [];
    }
    setName(){
        this.name = document.getElementById("name").value;
    }
    setnoOfQuestions(){
        this.noOfQuestions = document.getElementById("noOfQuestions").value;
    }
}

class Question {
    constructor(category, question, answer) {
        this.category = category;
        this.question = question;
        this.answer = answer;
        this.currentQuestion = 0;    
    }

    addQuests(json) {
        for (let json_questions of json.questions){
            let question = new Question(json_questions.category, json_questions.question, json_questions.answers);
            quiz.quests.push(question);
        }
    }    
}

function demoDisplay() {
    document.getElementById("display").style.display = "none";
  }

let json = getJSON("http://www.mocky.io/v2/5d91d2df310000ea8110cae6");
let questionObject = new Question();
let quiz = new Quiz(); 

questionObject.addQuests(json); 

document.addEventListener("DOMContentLoaded", function(e){
    let start = document.getElementById("start");
    

start.addEventListener("click", function(e){
    let question = document.getElementById("question").innerHTML = quiz.quests[0].question;
    let answer1 = document.getElementById("answer1").innerHTML = quiz.quests[0].answer[0].alt;
    let answer2 = document.getElementById("answer2").innerHTML = quiz.quests[0].answer[1].alt;
    let answer3 = document.getElementById("answer3").innerHTML = quiz.quests[0].answer[2].alt;
    let answer4 = document.getElementById("answer4").innerHTML = quiz.quests[0].answer[3].alt;
    quiz.setName();
    quiz.setnoOfQuestions();
    console.log( quiz.name,'\n', quiz.noOfQuestions,'\n', question,'\n', answer1,'\n', answer2,'\n', answer3,'\n', answer4);
});

});

let choices = document.getElementById("choices");
choices.addEventListener('click', (event)=>
{
  console.log(event.target.id);

});

if(quiz.noOfQuestions >= 5){
    
}

function progress(){
    document.getElementById("progress");
    progress.innerHTML = "Question" + (currentQuestion+1) + "of" + totalQuestions;
}