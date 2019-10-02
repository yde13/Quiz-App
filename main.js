
//spara värdet noofquestion och skriva ut så många frågor som spelare vill ha
//spara värde så man ser score i slutet och hur många frågor man svarat på
//kunna trycka på checkboxes som sparas nånstans(checked)

class Quiz {
    constructor(name) {
        this.name = name;
        this.noOfQuestions = noOfQuestions;
        this.quests = [];
        this.currentQuestion = 0;

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
    }

    addQuests(json) {
        for (let json_questions of json.questions){
            let question = new Question(json_questions.category, json_questions.question, json_questions.answers);
            quiz.quests.push(question);
        }
    }    
}

function display() {
    document.getElementById("display").style.display = "none";
  }

let json = getJSON("http://www.mocky.io/v2/5d949e5c2f00002d008ff84c");
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