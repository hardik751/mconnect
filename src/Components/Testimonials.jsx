function Testimonials() {
  return (
    <section id="testimonials" className="py-6">
      <div className="container text-center">
        <h2 className="mb-5">What Our Patients Say</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <p>"Excellent service and caring doctors."</p>
              <h6>- Sarah Johnson</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4">
              <p>"Professional staff and modern facilities."</p>
              <h6>- Michael Brown</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4">
              <p>"Highly recommend for family healthcare."</p>
              <h6>- Emily Davis</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
