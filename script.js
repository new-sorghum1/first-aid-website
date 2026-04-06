function toggleDark() {
    document.body.classList.toggle("dark");
}

function searchPage() {
    let input = document.getElementById("search").value.toLowerCase();

    if (input.includes("cut")) window.location.href = "definition.html";
    else if (input.includes("symptom")) window.location.href = "symptoms.html";
    else if (input.includes("step")) window.location.href = "steps.html";
    else if (input.includes("prevent")) window.location.href = "prevention.html";
    else if (input.includes("kit")) window.location.href = "kit.html";
    else alert("No results found");
}

let score = 0;

function answer(correct) {
    if (correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

function showScore() {
    alert("Your score: " + score);
}