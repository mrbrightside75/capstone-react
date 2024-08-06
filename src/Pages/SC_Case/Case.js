import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Case.scss";

const Case = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <header>
        <div className="row">
          <div className="col-6">
            <h2>Child Case</h2>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col d-flex justify-content-center" id="search">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="row" id="filterSort">
              <div className="col">
                <a>Filter</a>
              </div>
              <div className="col d-flex justify-content-end">
                <a>Sort</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row" id="content">
        <div className="col-4">
          <div className="row">
            <div className="col demographicMenu">
              <div className="row">
                <div className="col-8">
                  <h3>Child Info</h3>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button>Edit</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6"><h6>Name:</h6></div>
                <div className="col-6"><p>Doe, Jane</p></div>
              </div>
              <div className="row">
                <div className="col-6"><h6>DOB:</h6></div>
                <div className="col-6"><p>5/31/24</p></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col demographicMenu">
              <div className="row">
                <div className="col-8">
                  <h3>Child Info</h3>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button>Edit</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6"><h6>Name:</h6></div>
                <div className="col-6"><p>Doe, Jane</p></div>
              </div>
              <div className="row">
                <div className="col-6"><h6>DOB:</h6></div>
                <div className="col-6"><p>5/31/24</p></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col demographicMenu" id="careTeam">
              <div className="row">
                <div className="col-8">
                  <h3>Care Team</h3>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button>Edit</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h5>Name:</h5>
                  <p>Test Name</p>
                  <p>Test Name</p>
                  <p>Test Name</p>
                  <p>Test Name</p>
                  <p>Test Name</p>
                </div>
                <div className="col-6">
                  <h5>Groups:</h5>
                  <p>Test Group</p>
                  <p>Test Group</p>
                  <p>Test Group</p>
                  <p>Test Group</p>
                  <p>Test Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8" id="caseMenu">
          <Link to="/case-ifsp">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Individual Family Service Plan</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-eval.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Evaluation</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-sc-notes.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Service Coordinator Notes</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-records.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Records</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-consents.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Consents & Authorizations</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-billing-insurance.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Billing & Insurance</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-travel.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>Travel</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
          <Link to="/SC_Case/case-transition.html">
            <div className="row caseMenuItem">
              <div className="col">
                <h2>CPSE Transition</h2>
              </div>
              <div className="col-1">
                <span className="material-icons arrow-icon">chevron_right</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Case;