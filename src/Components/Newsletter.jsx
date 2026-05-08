function Newsletter() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h3>Subscribe to Our Newsletter</h3>

        <form className="row justify-content-center mt-4">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
