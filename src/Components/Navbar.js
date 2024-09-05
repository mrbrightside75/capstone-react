import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/dashboard">
								My Dashboard
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link className="nav-link" to="/inbox">
								Inbox
							</Link>
						</li> */}
						{/* <li className="nav-item">
							<Link
								className="nav-link"
								to="/Report/sc-report.html">
								Report
							</Link>
						</li> */}
						{/* <li className="nav-item">
							<Link className="nav-link" to="/referral">
								New Case
							</Link>
						</li> */}
						<li className="nav-item">
							<Link className="nav-link" to="/demographics">
								Demographics
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/createAccount">
								Create Account
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
