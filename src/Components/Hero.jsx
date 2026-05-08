import { Link } from "react-router-dom";
import heroImage from "../assets/img/gallery/hero.png";

// Import all your components
import Departments from "./Departments";
import About from "./About";
import Doctors from "./Doctors";
import Appointment from "./Appointment";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section py-6"
        style={{ marginTop: "90px" }}   // ✅ FIXED GAP BELOW NAVBAR
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Hero Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={heroImage}
                alt="MConnect Hero"
                className="img-fluid rounded"
              />
            </div>

            {/* Right: Hero Text */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-4 mb-3">Welcome to MConnect</h1>

              <p className="lead mb-4">
                MConnect is your one-stop platform connecting students,
                parents, and therapists to support mental wellness and personal growth.
                Whether you’re looking for professional guidance, tracking progress,
                or staying connected with your child’s well-being, MConnect makes it easy
                to access the help you need, all in one place.
              </p>

              <Link to="/signin" className="btn btn-primary btn-lg me-3 mb-2">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Departments />
      <About />
      <Doctors />
      <Appointment />
      <Blog />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Hero;