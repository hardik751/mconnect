import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/img/gallery/hero.png";

function TherapistDashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={heroImage}
                alt="Therapist"
                className="img-fluid rounded"
              />
            </div>

            {/* Text */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-5 mb-3">
                Therapist Dashboard
              </h1>

              <p className="lead mb-4">
                Manage tests, track results, and schedule meetings
                to support students and parents effectively.
              </p>

              <button
                className="btn btn-primary me-2 mb-2"
                onClick={() => navigate("/create-test")}
              >
                Create Test
              </button>

              <button
                className="btn btn-success me-2 mb-2"
                onClick={() => navigate("/results")}
              >
                View Results
              </button>

              <button
                className="btn btn-warning mb-2"
                onClick={() => navigate("/meetings")}
              >
                Manage Meetings
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Test List Section */}
      <div className="container mt-5">
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">Your Created Tests</h4>

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Mental Health Check
              <button className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              Stress Level Test
              <button className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TherapistDashboard;