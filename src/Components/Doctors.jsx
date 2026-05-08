function Doctors() {
  return (
    <section id="doctors" className="py-6 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Our Doctors</h2>

        <div id="doctorCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="card p-3">
                    <img
                      src="../assets/img/gallery/doctor-1.png"
                      className="card-img-top"
                      alt="Doctor"
                    />
                    <div className="card-body">
                      <h5>Dr. John Doe</h5>
                      <p>Parent Relation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="card p-3">
                    <img
                      src="../assets/img/gallery/doctor-2.png"
                      className="card-img-top"
                      alt="Doctor"
                    />
                    <div className="card-body">
                      <h5>Dr. Jane Smith</h5>
                      <p>Therapist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#doctorCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#doctorCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default Doctors;
