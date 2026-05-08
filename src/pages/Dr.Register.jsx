import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
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

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:57489/api/doctors/DRregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            specialization: formData.specialization,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Doctor Registered Successfully ✅");
        console.log(data);

        // 👉 Redirect after success
        navigate("/therapist-dashboard");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-center mb-5">Doctor Registration</h2>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Doctor Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Doctor Email"
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
            <select
              name="specialization"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">Select Specialization</option>
              <option>Therapist</option>
              
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
            <button type="submit" className="btn btn-primary rounded-pill"
            onClick={() => navigate("/TherapistDashboard")}>
              Register Doctor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DoctorRegister;