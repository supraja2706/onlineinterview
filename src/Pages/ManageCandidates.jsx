import { useEffect, useState } from "react";
import axios from "axios";
import "./ManageCandidates.css";

function ManageCandidates() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/candidates"
      );

      setCandidates(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteCandidate = async (id) => {
    try {

      await axios.delete(
        `http://localhost:5000/api/candidates/${id}`
      );

      alert("Candidate Deleted");

      fetchCandidates();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="candidate-container">

      <h1>Manage Candidates</h1>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Domain</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {candidates.map((candidate) => (
            <tr key={candidate._id}>

              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.qualification}</td>
              <td>{candidate.domain}</td>

              <td>
                <button
                  onClick={() =>
                    deleteCandidate(candidate._id)
                  }
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ManageCandidates;