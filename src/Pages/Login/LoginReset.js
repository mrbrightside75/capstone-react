import { Link } from "react-router-dom";

const LoginReset = () => {
  return (
    <div className="container-fluid">
      <div className="whiteWindow">
        <h2>Forgot Your Password</h2>
        <hr />
        <p>Submit a request to reset your password.</p>
        <div className="col d-flex justify-content-center" id="loginButton">
          <Link to="/SC_Dashboard/sc-dashboard.html" className="btn btn-custom">
            REQUEST PASSWORD RESET
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginReset;