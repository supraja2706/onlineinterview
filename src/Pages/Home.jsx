import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const jobs = [
    "Software Developer",
    "Web Developer",
    "Data Analyst",
    "UI/UX Designer",
    "Python Developer",
    "Java Developer",
    "MERN Stack Developer",
    "Cyber Security Analyst",
    "Cloud Engineer",
    "AI Engineer"
  ];

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="overlay">
          <h1>Online Job Interview Portal</h1>

          <p>
            Apply for jobs and attend online interview rounds
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/register")}
          >
            Apply Now
          </button>
        </div>
      </section>

      <section className="jobs">
        <h2>Available Jobs</h2>

        <div className="job-grid">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job}</h3>

              <button
                onClick={() => navigate("/register")}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;