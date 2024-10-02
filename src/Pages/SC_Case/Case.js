import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Case.css";
import backendURL from "../../api";

const Case = () => {
	const { caseId, animal } = useParams(); // Get the case ID from the URL
	const [caseData, setCaseData] = useState(null);
	console.log(animal);
	// Fetch case data when the component mounts
	useEffect(() => {
		const fetchCaseData = async () => {
			try {
				let url = backendURL();
				const response = await fetch(`${url}/cases/${caseId}`);
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
	}, [caseId]);

	if (!caseData) {
		return <p>Loading...</p>;
	}
	return (
		<div className="container-fluid">
			<Navbar />
			<header>
				<div className="row">
					<div className="col-6">
						<h3>
							{caseData.firstname} {caseData.lastname}'s Case
						</h3>
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
				<div className="col-12 col-md-3" id="caseMenu">
					<Link to={`/${caseId}/case_referral`}>
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Referral</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-ifsp">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Individual Family Service Plan</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-evaluation">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Evaluation</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-sc-notes">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Service Coordinator Notes</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-records">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Records</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-consents-auths">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Consents & Authorizations</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-bill-insurance">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Billing & Insurance</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-travel">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>Travel</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to="/case-cpse-transition">
						<div className="row caseMenuItem align-items-center py-2">
							<div className="col-10">
								<h5>CPSE Transition</h5>
							</div>
							<div className="col-2 text-end">
								<span className="material-icons arrow-icon">
									chevron_right
								</span>
							</div>
						</div>
					</Link>
					<Link to={`/case/${caseId}/newreferral`}>
						<div className="row caseMenuItem">
							<div className="col">
								<h3>Add New Referral</h3>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-9">
					{/* Demographic Info Section */}
					<div className="row">
						<div className="col-4">
							<label htmlFor="firstname">First Name:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="firstname"
								name="firstname"
								value={caseData.firstname || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="lastname">Last Name:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="lastname"
								name="lastname"
								value={caseData.lastname || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="prefix">Prefix:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="prefix"
								name="prefix"
								value={caseData.prefix || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="suffix">Suffix:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="suffix"
								name="suffix"
								value={caseData.suffix || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="dateofbirth">Date of Birth:</label>
						</div>
						<div className="col-8">
							<input
								type="date"
								id="dateofbirth"
								name="dateofbirth"
								value={
									caseData.dateofbirth
										? caseData.dateofbirth.substring(0, 10)
										: ""
								}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="gestationalage">
								Gestational Age:
							</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="gestationalage"
								name="gestationalage"
								value={caseData.gestationalage || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="ethnicity">Ethnicity:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="ethnicity"
								name="ethnicity"
								value={caseData.ethnicity || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="race">Race:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="race"
								name="race"
								value={caseData.race || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="address">Address:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="address"
								name="address"
								value={caseData.address || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="language">Language:</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="language"
								name="language"
								value={caseData.language || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<label htmlFor="schooldistrict">
								School District:
							</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								id="schooldistrict"
								name="schooldistrict"
								value={caseData.schooldistrict || ""}
								readOnly
								className="form-control"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Case;
