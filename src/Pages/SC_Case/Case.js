import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Case.css";

const Case = () => {
	const { id, animal } = useParams(); // Get the case ID from the URL
	const [caseData, setCaseData] = useState(null);
	console.log(animal);
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
					<Link to="/case-evaluation">
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
					<Link to="/case-sc-notes">
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
					<Link to="/case-records">
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
					<Link to="/case-consents-auths">
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
					<Link to="/case-bill-insurance">
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
					<Link to="/case-travel">
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
					<Link to="/case-cpse-transition">
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
				<div className="col-9">
					<div className="row">
						<div className="col-12">
							<label for="firstname">First Name:</label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								value={caseData.firstname}
								readonly
							/>
						</div>
						{/* End of first name */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="lastname">Last Name:</label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								value={caseData.lastname || ""}
								readOnly
							/>
						</div>
						{/* End of Last Name */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="prefix">Prefix:</label>
							<input
								type="text"
								id="prefix"
								name="prefix"
								value={caseData.prefix || ""}
								readOnly
							/>
						</div>
						{/* End of Prefix */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="suffix">Suffix:</label>
							<input
								type="text"
								id="suffix"
								name="suffix"
								value={caseData.suffix || ""}
								readOnly
							/>
						</div>
						{/* End of Suffix */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="dateofbirth">Date of Birth:</label>
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
							/>
						</div>
						{/* End of DOB */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="gestationalage">
								Gestational Age:
							</label>
							<input
								type="text"
								id="gestationalage"
								name="gestationalage"
								value={caseData.gestationalage || ""}
								readOnly
							/>
						</div>
						{/* End of gestationalage */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="ethnicity">Ethnicity:</label>
							<input
								type="text"
								id="ethnicity"
								name="ethnicity"
								value={caseData.ethnicity || ""}
								readOnly
							/>
						</div>
						{/* End of ethnicity */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="race">Race:</label>
							<input
								type="text"
								id="race"
								name="race"
								value={caseData.race || ""}
								readOnly
							/>
						</div>
						{/* End of race */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="address">Address:</label>
							<input
								type="text"
								id="address"
								name="address"
								value={caseData.address || ""}
								readOnly
							/>
						</div>
						{/* End of address */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="language">Language:</label>
							<input
								type="text"
								id="language"
								name="language"
								value={caseData.language || ""}
								readOnly
							/>
						</div>
						{/* End of language */}
					</div>
					<div className="row">
						<div className="col-12">
							<label htmlFor="schooldistrict">
								School District:
							</label>
							<input
								type="text"
								id="schooldistrict"
								name="schooldistrict"
								value={caseData.schooldistrict || ""}
								readOnly
							/>
						</div>
						{/* End of schooldistrict */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Case;
