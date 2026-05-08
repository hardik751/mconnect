import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:57489/api/students/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            year: formData.year,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Student Registered Successfully ✅");
        console.log(data);

        // Redirect after successful registration
        navigate("/student-dashboard");
      } else {
        alert(data.message || "Registration Failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Student Registration</h2>

        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Student Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Student Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="course"
              className="form-control"
              placeholder="Course (B.Tech, MBA etc)"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <select
              name="year"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-primary rounded-pill px-5"
            >
              Register Student
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default StudentRegister;