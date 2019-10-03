
//spara värdet noofquestion och skriva ut så många frågor som spelare vill ha
//skapa en slutsida som visas när användaren svarat på det antal frågor som spelaren skrivit

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
    if(checkAnswer()) {
        quiz.score++; 
    };
    console.log(checkAnswer());
    quiz.nextQuestion();
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

//skpar en function checkanswer som håller koll på vilken checkbox spelaren trycker på samt vilken checkbox som är true och false
function checkAnswer() {
    let checkboxes = Array.from(document.getElementsByClassName("checkboxes")).map((checkbox) => {return checkbox.checked});

    let correctAnswers = quiz.quests[quiz.currentQuestion].answer.map((question) => {return question.correct});
    //gör om arrayerna checkboxes och correctanswers för att enklare kunna jämföra dem
    return JSON.stringify(checkboxes) == JSON.stringify(correctAnswers);
}

//skriver ut vilken fråga man är på 
function progress(){
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + (quiz.currentQuestion+1) + " of " + quiz.noOfQuestions;

    let setplayer = document.getElementById("setplayer")
    
    setplayer.innerHTML = quiz.name;

}

/*function finish(){
    let finish = quiz.noOfQuestions.value;
    if (quiz.noOfQuestions === 
}*/