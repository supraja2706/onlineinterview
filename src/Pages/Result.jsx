import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const navigate = useNavigate();
  const candidateName =
  localStorage.getItem("candidateName") || "Candidate";
  console.log("Candidate Name:", candidateName);

  const aptitude =
    Number(localStorage.getItem("aptitudeScore")) || 0;

  const technical =
    Number(localStorage.getItem("technicalScore")) || 0;

  const hr =
    Number(localStorage.getItem("hrScore")) || 0;

  const totalScore = aptitude + technical + hr;

  const result =
    totalScore >= 10 ? "SELECTED" : "REJECTED";

  return (
    <div className="result-container">
      <h1>Final Interview Result</h1>

      <div className="score-card">
        <h2>Candidate Name: {candidateName}</h2>
        <h3>Aptitude Score: {aptitude}</h3>
        <h3>Technical Score: {technical}</h3>
        <h3>HR Score: {hr}</h3>
        <h2>Total Score: {totalScore}</h2>
      </div>

      <h1
        className={
          result === "SELECTED"
            ? "selected"
            : "rejected"
        }
      >
        {result}
      </h1>

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default Result;