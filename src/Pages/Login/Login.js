import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="container-fluid" id="login">
			<div id="topRowSpacer">{/* Blank Row Top */}</div>
			<div className="row" style={{ marginTop: "40px" }}>
				<div className="col-4"></div>
				<div className="col-4" id="loginForm">
					<div className="row">
						<div className="col-2">{/* Spacer */}</div>
						<div className="col-8">
							<form>
								<div className="row">
									<header className="text-align-center">
										<h1>User Login</h1>
										<hr />
									</header>
									{/* end of header row */}
								</div>
								<div className="row" id="authInput">
									<div className="col">
										<label
											htmlFor="username"
											className="form-label">
											Username:
										</label>
										<input
											type="text"
											id="username"
											className="form-control"
											placeholder="No username just press LOGIN"
										/>
									</div>
									{/* End of user name */}
								</div>
								<div className="row" id="authInput">
									<div className="col">
										<label
											htmlFor="password"
											className="form-label">
											Password:
										</label>
										<input
											type="password"
											id="password"
											className="form-control"
											placeholder="No password just press LOGIN"
										/>
									</div>
									{/* End of password */}
								</div>
								<div className="row">
									<div
										className="col d-flex justify-content-center"
										id="loginButton">
										<Link
											to="/dashboard"
											className="btn btn-custom">
											LOGIN
										</Link>
									</div>
									{/* end of login */}
								</div>
								<div className="row">
									<div
										className="col d-flex justify-content-center"
										id="forgotPassword">
										{/* <Link to="/Pages/Login/LoginReset.js">
											Forgot Password
										</Link> */}
									</div>
									{/* End of forgot password */}
								</div>
							</form>
						</div>
						<div className="col-2">{/* Spacer */}</div>
					</div>
				</div>
				<div className="col-4"></div>
				{/* Middle Row */}
			</div>
			<div className="row">{/* Bottom Row */}</div>
		</div>
	);
};

export default Login;
