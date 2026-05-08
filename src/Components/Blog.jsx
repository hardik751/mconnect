function Blog() {
  return (
    <section id="blog" className="py-6 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Latest Blog Posts</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="../assets/img/gallery/blog-1.png"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5>Health Tips for 2026</h5>
                <p>Stay healthy with our latest expert advice.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="../assets/img/gallery/blog-2.png"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5>Importance of Regular Checkups</h5>
                <p>Why routine health screening matters.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="../assets/gallery/blog-3.png"
                className="card-img-top"
                alt="Blog"
              />
              <div className="card-body">
                <h5>Healthy Lifestyle Guide</h5>
                <p>Simple habits for a better life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
