function Departments() {
  return (
    <section id="departments" className="py-6" style={{ marginTop: "80px" }}>
      <div className="container text-center">
        <h2 className="mb-5">Our Therapy Departments</h2>

        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Child & Adolescent Therapy</h5>
              <p>Support for students struggling with stress, anxiety, or behavioral challenges.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Parent Guidance</h5>
              <p>Resources and counseling to help parents support their child’s mental wellness.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Academic & Career Counseling</h5>
              <p>Personalized support to help students succeed academically and plan their future.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Stress & Anxiety Management</h5>
              <p>Therapist-led programs for coping with stress, anxiety, and emotional challenges.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Group Therapy Sessions</h5>
              <p>Interactive group sessions to promote social skills, confidence, and peer support.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100 shadow-sm">
              <h5 className="mb-3">Mindfulness & Well-being</h5>
              <p>Techniques and programs to improve focus, emotional balance, and overall mental health.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Departments;