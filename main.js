
//spara värdet noofquestion och skriva ut så många frågor som spelare vill ha
//kunna trycka på checkboxes som sparas nånstans(checked)
//kolla ifall checkboxes är true eller false
//spara värde så man ser score i slutet 


class Quiz {
    constructor(name) {
        this.name = name;
        this.noOfQuestions = noOfQuestions;
        this.quests = [];
        this.currentQuestion = 0;
        this.score = 0;
    }
    setName(){
        this.name = document.getElementById("name").value;
    }
    setnoOfQuestions(){
        this.noOfQuestions = document.getElementById("noOfQuestions").value;
    }
    nextQuestion(){
        this.currentQuestion++
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
    document.getElementById('choices').classList.remove('hidden');
}

let json = getJSON("http://www.mocky.io/v2/5d949e5c2f00002d008ff84c");
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

function progress(){
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + (quiz.currentQuestion+1) + " of " + quiz.noOfQuestions;
}