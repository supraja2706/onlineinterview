import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HR.css";

function HR() {

  const navigate = useNavigate();

  const [about, setAbout] = useState("");
  const [hire, setHire] = useState("");
  const [strength, setStrength] = useState("");

  const submitHR = () => {

    if (
      about.trim() === "" ||
      hire.trim() === "" ||
      strength.trim() === ""
    ) {
      alert("Please answer all questions");
      return;
    }

    localStorage.setItem("hrScore", 3);

    alert("HR Round Completed");

    navigate("/result");
  };

  return (
    <div className="hr-container">

      <div className="hr-card">

        <h1>HR Round</h1>

        <label>Tell me about yourself</label>
        <textarea
          rows="4"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <label>Why should we hire you?</label>
        <textarea
          rows="4"
          value={hire}
          onChange={(e) => setHire(e.target.value)}
        />

        <label>What are your strengths?</label>
        <textarea
          rows="4"
          value={strength}
          onChange={(e) => setStrength(e.target.value)}
        />

        <button onClick={submitHR}>
          Submit HR Round
        </button>

      </div>

    </div>
  );
}

export default HR;