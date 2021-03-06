
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
    setName() {
        this.name = document.getElementById("name").value;
    }

    //metod som tar in hur många frågor som spelaren vill köra
    setnoOfQuestions() {
        this.noOfQuestions = document.getElementById("noOfQuestions").value;
    }

    //metod som huvudsakligen tar index 0 från json och adderar med en för varje gång man trycker på next knappen
    nextQuestion() {
        this.currentQuestion++
    }

    //metod som döljer och visar när man trycker på startknappen
    display() {
    document.getElementById("display").style.display = "none";
    document.getElementById('choices').classList.remove('hidden');
    }

    //skpar en metod checkanswer som håller koll på vilken checkbox spelaren trycker på samt vilken checkbox som är true eller false
    checkAnswer() {
    let checkboxes = Array.from(document.getElementsByClassName("checkboxes")).map((checkbox) => { return checkbox.checked });
    let correctAnswers = quiz.quests[quiz.currentQuestion].answer.map((question) => { return question.correct });

    //gör om arrayerna checkboxes och correctanswers för att enklare kunna jämföra dem
    return JSON.stringify(checkboxes) == JSON.stringify(correctAnswers);
    }

    // metod som skriver ut vilken fråga man är på samt namnet spelaren skriver in
    progress() {
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + (quiz.currentQuestion + 1) + " of " + quiz.noOfQuestions;

    let setplayer = document.getElementById("setplayer")
    setplayer.innerHTML = "Lycka till " + quiz.name;
    }

    //metod som slicear från index 0 till det som spelaren skriver in i input noOfQuestions 
    amountOfQuestions() {
        if (quiz.noOfQuestions <= quiz.quests.length) {
        quiz.quests = quiz.quests.slice(0, (quiz.noOfQuestions));

        console.log(quiz.score + " Poäng");

        quiz.progress();
        }
    }
    //metod som gör att scoret visas om currentquestion är större eller liika med quests length
    finalScore() {
    if(quiz.currentQuestion >= quiz.quests.length){
        console.log("Du fick " + quiz.score + " poäng");
        document.getElementsByClassName("grid")[0].style.display = "none";
        document.getElementById("showScore").style.display = "block";
        let showScore = document.getElementById("showScore");

        showScore.innerHTML = quiz.name + ", du fick " + quiz.score + " av " + quiz.quests.length + " möjliga!" ;
        
        }
    }
}

//skapar question class
class Question {
    constructor(category, question, answer) {
        this.category = category;
        this.question = question;
        this.answer = answer;
    }
    //hämtar datan för kategori, fråga och alternativ
    addQuests(json) {
        for (let json_questions of json.questions) {
            let question = new Question(json_questions.category, json_questions.question, json_questions.answers);
            quiz.quests.push(question);
        }
    }
}

//hämtar data från min json från mocky.io
let json = getJSON("http://www.mocky.io/v2/5d94ed2b2f00002d008ffa3c");
let questionObject = new Question();
let quiz = new Quiz();

questionObject.addQuests(json);

document.addEventListener("DOMContentLoaded", function (e) {
document.getElementById("next").addEventListener("click", function (e) {
});

    //skapar eventlistner när man trycker på knappen start
    let start = document.getElementById("start");
    start.addEventListener("click", function (e) {
        document.getElementById("question").innerHTML = quiz.quests[quiz.currentQuestion].question;
        document.getElementById("answer1").innerHTML = quiz.quests[quiz.currentQuestion].answer[0].alt;
        document.getElementById("answer2").innerHTML = quiz.quests[quiz.currentQuestion].answer[1].alt;
        document.getElementById("answer3").innerHTML = quiz.quests[quiz.currentQuestion].answer[2].alt;
        document.getElementById("answer4").innerHTML = quiz.quests[quiz.currentQuestion].answer[3].alt;
        quiz.setName();
        quiz.setnoOfQuestions();
        quiz.progress();
        //console.log(quiz.name, '\n', quiz.noOfQuestions, '\n', question, '\n', answer1, '\n', answer2, '\n', answer3, '\n', answer4);
    });
    //skapar eventlistner när man trycker på knappen next
    next.addEventListener("click", function (e) {
        //en queryselectorall metod som gör att checkboxes inte fastnar nät man trycker nästa fråga
        refresher = document.querySelectorAll('#choice1, #choice2, #choice3, #choice4')
        if (quiz.checkAnswer()) {
            quiz.score++;
        };
        console.log(quiz.checkAnswer());
        refresher.forEach( r=>r.checked = false )
        quiz.nextQuestion();
        quiz.display();
        if(quiz.currentQuestion < quiz.quests.length) {
            document.getElementById("question").innerHTML = quiz.quests[quiz.currentQuestion].question;
            document.getElementById("answer1").innerHTML = quiz.quests[quiz.currentQuestion].answer[0].alt;
            document.getElementById("answer2").innerHTML = quiz.quests[quiz.currentQuestion].answer[1].alt;
            document.getElementById("answer3").innerHTML = quiz.quests[quiz.currentQuestion].answer[2].alt;
            document.getElementById("answer4").innerHTML = quiz.quests[quiz.currentQuestion].answer[3].alt;
        }  
        quiz.setName();
        quiz.setnoOfQuestions();
        quiz.progress();
        quiz.amountOfQuestions();
        quiz.finalScore();
    });
});

let choices = document.getElementById("choices");
choices.addEventListener('click', (event) => {
    console.log(event.target.id);
});