import { Link } from "react-router-dom";
// import "./src/navbar.css";

const Dashboard = () => {
  const cases = [
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
    "Smith, John",
  ];

  return (
    <div className="container-fluid">
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
      <header>
        <div className="row">
          <div className="col">
            <h2>SERVICE COORDINATOR DASHBOARD</h2>
          </div>
          <div className="col-4">
            {/* Spacer */}
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <span className="material-symbols-outlined">search</span>
              </div>
              <div className="col-10">
                <input id="caseSearch" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                {/* Spacer */}
              </div>
              <div className="col-4">
                <p>Filter</p>
              </div>
              <div className="col">
                {/* Spacer */}
              </div>
              <div className="col-4">
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {cases.slice(0, 6).map((caseName, index) => (
        <div className="row whiteWindow" key={index}>
          {cases.slice(index * 6, (index + 1) * 6).map((caseName, subIndex) => (
            <div className="col-2" key={subIndex}>
              <div className="row">
                <div className="col folderIcon">
                  <p>
                    <Link to="/SC_Case/sc-case.html">📁</Link>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="name">{caseName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;