import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Aptitude from "./pages/Aptitude";
import Technical from "./pages/Technical";
import HR from "./pages/HR";
import Result from "./pages/Result";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ManageJobs from "./pages/ManageJobs";
import ManageCandidates from "./pages/ManageCandidates";
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