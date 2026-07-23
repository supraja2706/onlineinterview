import { useState } from "react";
import { useNavigate } from "react-router-dom";
import technicalQuestions from "../data/technicalQuestions";
import "./Technical.css";

function Technical() {
  const navigate = useNavigate();

  const domain = localStorage.getItem("domain");

  const questions = technicalQuestions[domain] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      localStorage.setItem(
        "technicalScore",
        option === questions[current].answer
          ? score + 1
          : score
      );

      navigate("/hr");
    }
  };

  if (questions.length === 0) {
    return (
      <div className="result-container">
        <h1>No Questions Found</h1>
      </div>
    );
  }

  return (
    <div className="technical-container">

      <div className="question-card">

        <h2>
          {domain} Technical Round
        </h2>

        <h3>
          Question {current + 1} of {questions.length}
        </h3>

        <p>
          {questions[current].question}
        </p>

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

export default Technical;