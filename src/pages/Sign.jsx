import { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let apiUrl = "";

    if (formData.role === "doctor") {
      apiUrl = "http://localhost:57489/api/doctors/login";
    } 
    else if (formData.role === "parent") {
      apiUrl = "http://localhost:57489/api/parents/login";
    } 
    else if (formData.role === "student") {
      apiUrl = "http://localhost:57489/api/students/login";
    } 
    else {
      alert("Please select a role");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful ✅");
        console.log(data);

        // Example redirect
        // window.location.href = "/dashboard";

      } else {
        alert(data.message || "Login Failed ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-center mb-5">MConnect Sign In</h2>

        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-12">
            <select
              name="role"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="doctor">Doctor</option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="col-md-12">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-dark rounded-pill">
              Sign In
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default SignIn;