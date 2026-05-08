function About() {
  return (
    <section id="about" className="py-6 bg-light">
      <div className="container">

        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">About MConnect</h2>
          <p className="text-muted">
            Bridging the gap between students, parents, and therapists for better mental wellness.
          </p>
        </div>

        {/* Centered Content */}
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">

            <h4 className="mb-3">Why MConnect?</h4>

            <p className="text-muted">
              MConnect is designed to create a seamless connection between students,
              parents, and therapists. It helps identify emotional gaps, track mental
              well-being, and improve communication through structured assessments
              and guided sessions.
            </p>

            {/* Feature Points */}
            <ul className="list-unstyled mt-4">
              <li className="mb-2">✅ Mental Health Assessments (MCQ Tests)</li>
              <li className="mb-2">✅ Parent vs Student Insight Comparison</li>
              <li className="mb-2">✅ Therapist-guided Meetings</li>
              <li className="mb-2">✅ Progress Tracking & Reports</li>
            </ul>

            <button className="btn btn-primary mt-3 px-4 rounded-pill">
              Learn More
            </button>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="row text-center mt-5">

          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h5>📊 Smart Analysis</h5>
              <p className="text-muted">
                Compare responses between students and parents to detect gaps.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h5>🤝 Better Communication</h5>
              <p className="text-muted">
                Strengthen understanding between families and therapists.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h5>📅 Guided Sessions</h5>
              <p className="text-muted">
                Schedule and attend therapy sessions with ease.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;