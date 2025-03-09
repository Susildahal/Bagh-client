import React, { useState } from 'react';
import './First.css';

const First = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const[score,setScore]=useState(0)
  const correctAnswer = 'HyperText Markup Language';

  function handleAnswer(answer) {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);

      if (answer === correctAnswer) {
        setFeedback("Right Answer");
        setScore(score+10)
      } else {
        setFeedback("Wrong Answer");
        setScore(score)
      }

      // Clear feedback message after 1 second
      setTimeout(() => setFeedback(""), 1000);
    }
  }

  function Clear() {
    setFeedback("");
    setIsAnswered(false);
    setSelectedAnswer("");
  }

  return (
    <>
    <p className='score'>Score:{score}</p>
    <div className="quiz-container">
      <h1 className='title'>This is a Quiz on HTML</h1>
      <div className='question-container'>
        <div className='question-box'>
          <p>1). What is the full form of HTML?</p>
          <div className='options-grid'>
            <div
              className={`item ${selectedAnswer === 'HyperText Markup Language' ? (selectedAnswer === correctAnswer ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleAnswer("HyperText Markup Language")}
              style={{ pointerEvents: isAnswered ? "none" : "auto" }}
            >
              HyperText Markup Language
            </div>
            <div
              className={`item ${selectedAnswer === 'Hyperlink and Text Markup Language' ? (selectedAnswer === correctAnswer ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleAnswer("Hyperlink and Text Markup Language")}
              style={{ pointerEvents: isAnswered ? "none" : "auto" }}
            >
              Hyperlink and Text Markup Language
            </div>
            <div
              className={`item ${selectedAnswer === 'HyperText Machine Language' ? (selectedAnswer === correctAnswer ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleAnswer("HyperText Machine Language")}
              style={{ pointerEvents: isAnswered ? "none" : "auto" }}
            >
              HyperText Machine Language
            </div>
            <div
              className={`item ${selectedAnswer === 'Hyper Transfer Markup Language' ? (selectedAnswer === correctAnswer ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleAnswer("Hyper Transfer Markup Language")}
              style={{ pointerEvents: isAnswered ? "none" : "auto" }}
            >
              Hyper Transfer Markup Language
            </div>
          </div>
          {feedback && (
            <p className={feedback === "Right Answer" ? 'right' : 'wrong'}>
              {feedback} <span className='clear' onClick={Clear}> x</span>
            </p>
          )}
          {isAnswered && (
            <p className='rightanswer'>Right Answer is: {correctAnswer}</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default First;
