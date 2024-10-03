import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backendURL from "../../api"; // URL for backend requests
import Navbar from "../../Components/Navbar";
import "./Inbox.css"; // Make sure to style it appropriately

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		month: "2-digit",
		day: "2-digit",
		year: "numeric",
	});
};

const Inbox = () => {
	const [role, setRole] = useState("Clerical"); // Default role
	const [cases, setCases] = useState([]);
	const [filteredCases, setFilteredCases] = useState([]);

	// Fetch cases from the backend
	useEffect(() => {
		const fetchCases = async () => {
			try {
				let url = backendURL();
				console.log(`Fetching from URL: ${url}/cases`);
				const response = await fetch(`${url}/cases`);
				const data = await response.json();
				setCases(data);
			} catch (error) {
				console.error("Error fetching cases:", error);
			}
		};
		fetchCases();
	}, []);

	// Update filtered cases when the role changes
	useEffect(() => {
		filterCasesByRole();
	}, [role, cases]);

	const filterCasesByRole = () => {
		let filtered = [];
		switch (role) {
			case "Clerical":
				filtered = cases.filter(
					(caseItem) =>
						caseItem.status === "Referral" ||
						caseItem.status === "Awaiting Validation"
				);
				break;
			case "Supervisor":
				filtered = cases.filter(
					(caseItem) =>
						caseItem.status === "Awaiting Validation" ||
						caseItem.status === "Validated"
				);
				break;
			case "Service Coordinator":
				filtered = cases.filter(
					(caseItem) =>
						caseItem.status === "Assigned" ||
						caseItem.status === "Active"
				);
				break;
			case "Medical Records":
				filtered = cases.filter(
					(caseItem) =>
						caseItem.status === "Awaiting Closure" ||
						caseItem.status === "Inactive"
				);
				break;
			case "Admin":
				filtered = cases; // Admins see all cases
				break;
			default:
				filtered = cases;
		}
		setFilteredCases(filtered);
	};

	// Handle button rendering based on case status
	const renderActionButton = (caseItem) => {
		switch (caseItem.status) {
			case "Referral":
				return <span>No action needed</span>;
			case "Awaiting Validation":
				return (
					<Link to={`/cases/${caseItem.id}/validate`}>
						<button className="btn btn-primary">View</button>
					</Link>
				);
			case "Validated":
				return (
					<Link to={`/assign/${caseItem.id}`}>
						<button className="btn btn-warning">Assign</button>
					</Link>
				);
			case "Assigned":
				return (
					<Link to={`/cases/${caseItem.id}/validate`}>
						<button className="btn btn-primary">Accept</button>
					</Link>
				);
			case "Active":
				return (
					<Link to={`/Case/${caseItem.id}`}>
						<button className="btn btn-success">View</button>
					</Link>
				);
			case "Awaiting Closure":
				return <button className="btn btn-secondary">Close</button>;
			case "Inactive":
				return <button className="btn btn-info">Reopen</button>;
			default:
				return <span>No action</span>;
		}
	};

	return (
		<>
			<Navbar />

			<div className="inbox-container" id="inbox">
				<h2>Inbox</h2>
				<div className="role-selector">
					<label htmlFor="role">Select Role:</label>
					<select
						id="role"
						value={role}
						onChange={(e) => setRole(e.target.value)}>
						<option value="Clerical">Clerical</option>
						<option value="Supervisor">Supervisor</option>
						<option value="Service Coordinator">
							Service Coordinator
						</option>
						<option value="Medical Records">Medical Records</option>
						<option value="Admin">Admin</option>
					</select>
				</div>

				{/* List view */}
				<div className="list-view">
					<div className="row list-header">
						<div className="col-2 d-flex flex-column justify-content-end">
							<strong>First Name</strong>
						</div>
						<div className="col-2 d-flex flex-column justify-content-end">
							<strong>Last Name</strong>
						</div>
						<div className="col-2 d-flex flex-column justify-content-end">
							<div className="row">
								<div className="col">
									<p>(YYYY-MM-DD)</p>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<strong>Date of Birth</strong>
								</div>
							</div>
						</div>
						<div className="col-2 d-flex flex-column justify-content-end">
							<strong>Status</strong>
						</div>
						<div className="col-4 d-flex flex-column justify-content-end">
							<strong>Actions</strong>
						</div>
					</div>

					{filteredCases.length > 0 ? (
						filteredCases.map((caseItem) => (
							<div className="row list-item" key={caseItem.id}>
								<div className="col-2">
									{caseItem.firstname}
								</div>
								<div className="col-2">{caseItem.lastname}</div>
								<div className="col-2">
									{" "}
									{caseItem.dateofbirth
										? caseItem.dateofbirth.substring(0, 10)
										: ""}{" "}
								</div>
								<div className="col-2">{caseItem.status}</div>
								<div className="col-4">
									{renderActionButton(caseItem)}
								</div>
							</div>
						))
					) : (
						<p>No cases available for this role.</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Inbox;
