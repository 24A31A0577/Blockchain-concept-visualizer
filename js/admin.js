let questions = JSON.parse(localStorage.getItem("questions")) || [];

function addQuestion() {
    let q = document.getElementById("question").value;
    let o1 = document.getElementById("opt1").value;
    let o2 = document.getElementById("opt2").value;
    let o3 = document.getElementById("opt3").value;
    let o4 = document.getElementById("opt4").value;
    let ans = document.getElementById("answer").value;
    if(q=="" || o1=="" || o2=="" || o3=="" || o4=="" || ans==""){
        alert("Please fill all fields");
        return;
    }

    let questionObj = {
        question: q,
        options: [o1, o2, o3, o4],
        answer: ans
    };

    questions.push(questionObj);

    localStorage.setItem("questions", JSON.stringify(questions));

    displayQuestions();
    document.getElementById("question").value = "";
    document.getElementById("opt1").value = "";
    document.getElementById("opt2").value = "";
    document.getElementById("opt3").value = "";
    document.getElementById("opt4").value = "";
    document.getElementById("answer").value = "";
}
function displayQuestions() {
    let container = document.getElementById("questionsList");
    container.innerHTML = "";

    questions.forEach((q, index) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <p><b>${q.question}</b></p>

            <p>
            ${q.options.map(opt => 
                opt === q.answer ? `<b style="color:green">${opt}</b>` : opt
            ).join(", ")}
            </p>

            <p>Answer: ${q.answer}</p>

            <button onclick="deleteQuestion(${index})">Delete</button>
            <hr>
        `;

        container.appendChild(div);
    });
}

function deleteQuestion(index) {
    questions.splice(index, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    displayQuestions();
}
displayQuestions();
