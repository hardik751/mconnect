import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Departments from "./Components/Departments";
import About from "./Components/About";
import Doctors from "./Components/Doctors";
import Footer from "./Components/Footer";
import Meetings from "./pages/Meetings";
import StudentRegister from "./pages/Student.Register";
import DoctorRegister from "./pages/Dr.Register";
import ParentRegister from "./pages/Parent.Register";
import SignIn from "./pages/Sign";
import TherapistDashboard from "./pages/TherapistDashboard";
import Results from "./pages/Results";
import ParentDashboard from "./pages/ParentDashboard";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import StudentTest from "./pages/StudentTest";
import ParentTest from "./pages/ParentTest";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/sign" element={<SignIn />} />
        {/* Register Routes */}
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/doctor-register" element={<DoctorRegister />} />
        <Route path="/parent-register" element={<ParentRegister />} />
        <Route path="/therapist-dashboard" element={<TherapistDashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/attempt-test/:id" element={<ParentTest />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-test" element={<StudentTest />} />{" "}
        {/* 404 fallback */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
