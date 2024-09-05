import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Navbar from "../../Components/Navbar";

const Dashboard = () => {
	const [cases, setCases] = useState([]);

	// Fetch cases from the backend when the component mounts
	useEffect(() => {
		const fetchCases = async () => {
			try {
				const response = await fetch("http://localhost:3001/cases");
				if (response.ok) {
					const data = await response.json();
					setCases(data);
				} else {
					console.error("Failed to fetch cases");
				}
			} catch (error) {
				console.error("Error fetching cases:", error);
			}
		};

		fetchCases();
	}, []);

	return (
		<div className="container-fluid">
			<Navbar />
			<header>
				<div className="row">
					<div className="col">
						<h2>SERVICE COORDINATOR DASHBOARD</h2>
					</div>
					<div className="col-4">{/* Spacer */}</div>
					<div className="col-4">
						<div className="row">
							<div className="col-2">
								<span className="material-symbols-outlined">
									search
								</span>
							</div>
							<div className="col-10">
								<input id="caseSearch" type="text" />
							</div>
						</div>
						<div className="row">
							<div className="col-2">{/* Spacer */}</div>
							<div className="col-4">
								<p>Filter</p>
							</div>
							<div className="col">{/* Spacer */}</div>
							<div className="col-4">
								<p>Search</p>
							</div>
						</div>
					</div>
				</div>
			</header>
			{cases.length > 0 ? (
				<div className="row whiteWindow">
					{cases.map((caseItem, index) => (
						<div className="col-2" key={index}>
							<div className="row">
								<div className="col folderIcon">
									<p>
										{/* /cat is used to demonstrate how to pass parameters. Check the flow {Dashboard.js > DB > Dashboard.js > App.js > Case.js > DB} */}
										<Link to={`/Case/${caseItem.id}/cat`}>
											📁
										</Link>
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<p className="name">
										{caseItem.lastname},{" "}
										{caseItem.firstname}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>No cases available.</p>
			)}
		</div>
	);
};

export default Dashboard;
