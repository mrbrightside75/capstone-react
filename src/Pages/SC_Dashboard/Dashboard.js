import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Navbar from "../../Components/Navbar";
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
      <Navbar />
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
                    <Link to="/Case">📁</Link>
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