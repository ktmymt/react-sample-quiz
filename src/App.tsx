import React, { useState } from 'react';
import { fetchQuestions } from './api'; 

// components
import QuestionCard from './components/QuestionCard';

// types
import { QuestionState, Difficulty } from './api';

type AnswerObjects = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnser: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObjects[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
        questionNo={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next">Next Question</button>
    </div>
  );
}

export default App;
