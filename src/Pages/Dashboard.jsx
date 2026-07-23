import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();

  const [totalCandidates, setTotalCandidates] = useState(0);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/candidates"
      );

      setTotalCandidates(res.data.length);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">

        <div className="dash-card">
          <h2>{totalCandidates}</h2>
          <p>Total Candidates</p>
        </div>

        <div className="dash-card">
          <h2>10</h2>
          <p>Total Jobs</p>
        </div>

        <div className="dash-card">
          <h2>0</h2>
          <p>Selected</p>
        </div>

        <div className="dash-card">
          <h2>0</h2>
          <p>Rejected</p>
        </div>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <button
          onClick={() => navigate("/manage-jobs")}
        >
          Manage Jobs
        </button>

        <button
          onClick={() => navigate("/manage-candidates")}
        >
          Manage Candidates
        </button>
        
      </div>

    </div>
  );
}

export default Dashboard;