import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Aptitude from "./Pages/Aptitude";
import Technical from "./Pages/Technical";
import HR from "./Pages/HR";
import Result from "./Pages/Result";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import ManageJobs from "./Pages/ManageJobs";
import ManageCandidates from "./Pages/ManageCandidates";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/manage-candidates"element={<ManageCandidates />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;