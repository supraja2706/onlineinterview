import axios from "axios";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    domain: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save candidate details in localStorage
      localStorage.setItem("candidateName", formData.name);
      localStorage.setItem("domain", formData.domain);

      console.log("Saving Name:", formData.name);

      await axios.post(
        "http://localhost:5000/api/candidates",
        {
          ...formData,
          aptitudeScore: 0,
          technicalScore: 0,
          hrScore: 0,
          result: "Pending",
        }
      );

      alert("Registration Successful!");
      navigate("/aptitude");
    } catch (error) {
      console.log(error);
      alert("Error Saving Data");
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-container">
        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <h1>Candidate Registration</h1>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Qualification"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                qualification: e.target.value,
              })
            }
          />

          <select
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                domain: e.target.value,
              })
            }
          >
            <option value="">Select Domain</option>
            <option value="MERN">MERN Stack</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>

          <input
            type="file"
            required
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;