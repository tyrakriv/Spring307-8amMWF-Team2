const qBank = [
  {
    question:
      "How do you feel about the time you spent outside today?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "0"
  },
  {
    question:
      "How do you feel about the time you spent exercising today?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "1"
  },
  {
    question:
      "How do you feel about the time you spent with other people today?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "2"
  },
  {
    question: 
      "How do you feel about the food you ate today?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "3"
  },
  {
    question: 
      "How do you feel right now?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "4"
  },
  {
    question:
      "How do you feel about the time you spent doing something you love?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "5"
  },
  {
    question:
      "How do you feel about what you ate today?",
    answers: ["Happy", "Okay", "Sad"],
    correct: "Happy",
    questionId: "6"
  }
];

export default (n = 3) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
