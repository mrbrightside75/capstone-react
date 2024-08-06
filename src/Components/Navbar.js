import { Link } from "react-router-dom";
import "./Navbar.scss"
const Navbar =() => {
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/SC_Dashboard/sc-dashboard.html">
                  My Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SC_Inbox/sc-inbox.html">
                  Inbox
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SC_Calendar/sc-calendar.html">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Report/sc-report.html">
                  Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/referral.html">
                  New Case
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/demographics.html">
                  Demographics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
};

export default Navbar;