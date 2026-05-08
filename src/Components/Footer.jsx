import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212529",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        marginTop: "60px",
      }}
    >
      <div className="container">
        {/* Footer Logo / Brand */}
        <h3 style={{ marginBottom: "20px" }}>Livedoc</h3>

        {/* Contact Info */}
        <div style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          <p><FaEnvelope /> Email: <a href="mailto:hardikbajaj72066@gmail.com" style={{ color: "white" }}>hardikbajaj72066@gmail.com</a></p>
          <p><FaPhone /> Phone: <a href="tel:+917206657060" style={{ color: "white" }}>+91 7206657060</a></p>
          <p><FaMapMarkerAlt /> Address: Chitkara University, Rajpura, Punjab, India</p>
        </div>

        {/* Quick Links */}
        <div style={{ marginBottom: "20px" }}>
          <a href="/hero" style={{ color: "white", margin: "0 10px" }}>Home</a> |
          <a href="/about" style={{ color: "white", margin: "0 10px" }}>About</a> |
          <a href="/departments" style={{ color: "white", margin: "0 10px" }}>Departments</a> |
          <a href="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</a>
        </div>

        {/* Social Media */}
        <div style={{ marginBottom: "20px" }}>
          <a href="#" style={{ color: "white", margin: "0 10px" }}><FaFacebookF /></a>
          <a href="#" style={{ color: "white", margin: "0 10px" }}><FaTwitter /></a>
          <a href="#" style={{ color: "white", margin: "0 10px" }}><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.9rem", marginTop: "20px" }}>
          © 2026 Livedoc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;