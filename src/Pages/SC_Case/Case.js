import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Case.css";

const Case = () => {
	const { id } = useParams(); // Get the case ID from the URL
	const [caseData, setCaseData] = useState(null);

	// Fetch case data when the component mounts
	useEffect(() => {
		const fetchCaseData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3001/cases/${id}`
				);
				if (response.ok) {
					const data = await response.json();
					setCaseData(data);
				} else {
					console.error("Failed to fetch case data");
				}
			} catch (error) {
				console.error("Error fetching case data:", error);
			}
		};

		fetchCaseData();
	}, [id]);
	return (
		<div className="container-fluid">
			<Navbar />
			<header>
				<div className="row">
					<div className="col-6">
						<h3>Child Case</h3>
					</div>
					<div className="col-6">
						<div className="row">
							<div
								className="col d-flex justify-content-center"
								id="search">
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
				<div className="col-3" id="caseMenu">
					<Link to="/case-ifsp">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Individual Family Service Plan</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-eval.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Evaluation</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-sc-notes.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Service Coordinator Notes</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-records.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Records</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-consents.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Consents & Authorizations</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-billing-insurance.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Billing & Insurance</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-travel.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Travel</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/SC_Case/case-transition.html">
						<div className="row caseMenuItem">
							<div className="col">
								<h3>CPSE Transition</h3>
							</div>
							<div className="col-1">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-9"></div>
			</div>
		</div>
	);
};

export default Case;
