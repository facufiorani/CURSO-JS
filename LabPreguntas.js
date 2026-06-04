const questions = [];
const question1 = {
    category: "Historia",
    question: "¿En qué año llegó Cristóbal Colón a América?",
    choices: ["1492", "1500", "1488"],
    answer: "1492",
    };

    const question2 = {
    category: "Ciencia",
    question: "¿Cuál es el elemento más abundante en la atmósfera?",
    choices: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"],
    answer: "Nitrógeno",
    };

    const question3 = {
    category: "Geografía",
    question: "¿Cuál es la capital de Australia?",
    choices: ["Sídney", "Melbourne", "Canberra"],
    answer: "Canberra",
    };

    const question4 = {
    category: "Matemáticas",
    question: "¿Cuánto es la raíz cuadrada de 144?",
    choices: ["14", "12", "16"],
    answer: "12",
    };

    const question5 = {
    category: "Tecnología",
    question: "¿Qué significa HTML?",
    choices: [
        "HyperText Markup Language",
        "High Tech Modern Language",
        "HyperText Modern Links",
    ],
    answer: "HyperText Markup Language",
    };
    questions.push(question1, question2, question3, question4, question5);

    function getRandomQuestion(array) {
    return array[Math.floor(Math.random() * array.length)];
    }
    function getRandomComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
    }
    function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    }
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
