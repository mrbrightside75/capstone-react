import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import backendURL from "../../api"; // Adjust the path as needed

const Validate = () => {
	const { caseId } = useParams(); // Get the caseId from the URL params
	const [caseData, setCaseData] = useState(null);
	const [referralData, setReferralData] = useState(null);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// Fetch case and referral information
	useEffect(() => {
		const fetchCaseData = async () => {
			try {
				const url = backendURL();
				const caseResponse = await fetch(`${url}/cases/${caseId}`);
				const referralResponse = await fetch(
					`${url}/cases/${caseId}/referrals`
				);

				const caseInfo = await caseResponse.json();
				const referralInfo = await referralResponse.json();

				setCaseData(caseInfo);
				setReferralData(referralInfo[0]); // Assuming the first referral is shown
			} catch (error) {
				setError("Failed to fetch case or referral information.");
			}
		};

		fetchCaseData();
	}, [caseId]);

	// Handle case validation
	const handleValidate = async () => {
		try {
			const url = backendURL();
			const response = await fetch(`${url}/cases/${caseId}/status`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ status: "Validated" }),
			});

			if (response.ok) {
				navigate("/inbox"); // Redirect to the inbox after validating
			} else {
				setError("Failed to validate case.");
			}
		} catch (error) {
			setError("An error occurred while validating the case.");
		}
	};

	// Handle case acceptance
	const handleAccept = async () => {
		try {
			const url = backendURL();
			const response = await fetch(`${url}/cases/${caseId}/status`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ status: "Active" }),
			});

			if (response.ok) {
				navigate("/inbox"); // Redirect to the inbox after accepting
			} else {
				setError("Failed to accept case.");
			}
		} catch (error) {
			setError("An error occurred while accepting the case.");
		}
	};

	if (!caseData || !referralData) {
		return <p>Loading...</p>;
	}

	return (
		<div className="validate-container">
			<h2>Validate Case</h2>
			{error && <p className="error">{error}</p>}
			<h3>Case Demographic Information</h3>
			<p>
				<strong>First Name:</strong> {caseData.firstname} <br />
				<strong>Last Name:</strong> {caseData.lastname} <br />
				<strong>Date of Birth:</strong>{" "}
				{new Date(caseData.dateofbirth).toLocaleDateString()} <br />
				<strong>Address:</strong> {caseData.address} <br />
				<strong>Ethnicity:</strong> {caseData.ethnicity} <br />
				<strong>Race:</strong> {caseData.race}
			</p>
			<h3>Referral Information</h3>
			<p>
				<strong>Referral Date:</strong>{" "}
				{new Date(referralData.referralDate).toLocaleDateString()}{" "}
				<br />
				<strong>Referral Agency:</strong> {referralData.referralAgency}{" "}
				<br />
				<strong>Referral Reason:</strong> {referralData.referralReason}
			</p>

			{/* Conditional rendering for Validate or Accept button */}
			{caseData.status === "Awaiting Validation" ? (
				<button onClick={handleValidate} className="btn btn-success">
					Validate
				</button>
			) : (
				<button onClick={handleAccept} className="btn btn-success">
					Accept
				</button>
			)}
		</div>
	);
};

export default Validate;
