import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg" id="nav">
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
							<NavLink
								className="nav-link"
								exact
								to="/"
								activeClassName="active">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/dashboard"
								activeClassName="active">
								My Dashboard
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/demographics"
								activeClassName="active">
								New Case
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/inbox"
								activeClassName="active">
								Inbox
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
