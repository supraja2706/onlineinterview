import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/aptitudeQuestions";
import "./Aptitude.css";

function Aptitude() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {

    let newScore = score;

    if (option === questions[current].answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {

      localStorage.setItem(
        "aptitudeScore",
        newScore
      );

      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="result-box">

        <h1>Aptitude Test Completed ✅</h1>

        <h2>
          Score: {score} / {questions.length}
        </h2>

        <button
          onClick={() => navigate("/technical")}
        >
          Go To Technical Round
        </button>

      </div>
    );
  }

  return (
    <div className="aptitude-container">

      <div className="question-box">

        <h2>
          Question {current + 1} of {questions.length}
        </h2>

        <h3>
          {questions[current].question}
        </h3>

        {questions[current].options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}

export default Aptitude;