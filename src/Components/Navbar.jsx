import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/Hero">
          Mconnect
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Hero">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Departments">
                Departments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Doctors">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sign">
                Sign In
              </Link>
            </li>

            {/* ✅ Register Dropdown */}
            <li className="nav-item dropdown">
              {/* Dropdown Button */}
              <button
                className="nav-link dropdown-toggle btn btn-primary text-white px-3 rounded-pill"
                type="button"
                data-bs-toggle="dropdown"
              >
                Register
              </button>

              {/* Dropdown Items */}
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/student-register">
                    Student Register
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/doctor-register">
                    Doctor Register
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/parent-register">
                    Parent Register
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
