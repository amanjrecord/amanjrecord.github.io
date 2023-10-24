const questions = [
    "Starting Frontend; Why JavaScript?",
    "How popular is JavaScript?",
    "After learning JS, What Projects can I build",
    "JavaScript Job Market",
    "Learning JS RoadMap",
];

console.log("Helloo")

let current = 0;

function next(){
    const question = document.getElementById("question");
    const currentQuestion = questions[current];
    question.textContent = currentQuestion;
    current = current + 1;
    if (current>= questions.length){
        current = 0;
    }
}