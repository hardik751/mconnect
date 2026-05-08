function Appointment() {
  return (
    <section id="appointment" className="py-6">
      <div className="container">
        <h2 className="text-center mb-5">Book an Appointment</h2>

        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="col-md-6">
            <input type="date" className="form-control" required />
          </div>

          <div className="col-md-6">
            <select className="form-select">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary rounded-pill">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
