
let questions = JSON.parse(localStorage.getItem("questions")) || [];

function loadQuiz(){

    let quizBox = document.getElementById("quizBox");
    quizBox.innerHTML = "";
    if(questions.length === 0){
        quizBox.innerHTML = "<p>No questions added by admin.</p>";
        return;
    }
    questions.forEach((q, index) => {

        let div = document.createElement("div");

        div.innerHTML = `
            <p><b>${index+1}. ${q.question}</b></p>

            ${q.options.map(opt =>
                `<input type="radio" name="q${index}" value="${opt}"> ${opt}<br>`
            ).join("")}

            <br>
        `;

        quizBox.appendChild(div);
    });
}

function submitQuiz(){

    let score = 0;

    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);

        if(selected && selected.value === q.answer){
            score++;
        }
    });

    let percent = (score / questions.length) * 100;

    document.getElementById("result").innerText =
        "Your Score: " + score + "/" + questions.length +
        " (" + percent.toFixed(2) + "%)";
}
loadQuiz();
function showScores(){

    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    let box = document.getElementById("scoreList");

    scores.forEach(function(s){
        if(user && s.email === user.email){
            let p = document.createElement("p");
            p.innerText = "Score: " + s.score;
            box.appendChild(p);
        }
    });
}
showScores();
