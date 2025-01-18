const questions = [
  {
    questionText: "What is the capital of Bangladesh?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Dhaka", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "London", isCorrect: false },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of India?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: false },
      { answerText: "Dehli", isCorrect: true },
    ],
  },
  {
    questionText: "What is the capital of Afghanistan?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Kabul", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital of Pakistan?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "Islamabad", isCorrect: true },
      { answerText: "Paris", isCorrect: false },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
];
const App = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-xl">Quiz App</div>
        <div>
          <div>{questions[0].questionText}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
