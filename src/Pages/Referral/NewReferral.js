import React, { useState } from "react";
import "./Referral.css";
import backendURL from "../../api"; // Your backend API URL

const NewReferral = ({ caseId }) => {
	const [referralDate, setReferralDate] = useState("");
	const [referralAgency, setReferralAgency] = useState("");
	const [referralReason, setReferralReason] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");

		try {
			const url = backendURL();
			const response = await fetch(`${url}/referrals`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					referralDate,
					referralAgency,
					referralReason,
					caseId, // The caseId passed in as a prop
				}),
			});

			if (response.ok) {
				setSuccessMessage("Referral created successfully.");
				setReferralDate("");
				setReferralAgency("");
				setReferralReason("");
			} else {
				const errorData = await response.json();
				setError(errorData.error || "Failed to create referral.");
			}
		} catch (error) {
			setError("An error occurred while creating the referral.");
		}
	};

	return (
		<div className="referral-form-container">
			<h2>Create Referral</h2>
			{error && <p className="error-message">{error}</p>}
			{successMessage && (
				<p className="success-message">{successMessage}</p>
			)}

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="referralDate">Referral Date:</label>
					<input
						type="date"
						id="referralDate"
						value={referralDate}
						onChange={(e) => setReferralDate(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="referralAgency">Referral Agency:</label>
					<input
						type="text"
						id="referralAgency"
						value={referralAgency}
						onChange={(e) => setReferralAgency(e.target.value)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="referralReason">Referral Reason:</label>
					<textarea
						id="referralReason"
						value={referralReason}
						onChange={(e) =>
							setReferralReason(e.target.value)
						}></textarea>
				</div>

				<button type="submit">Create Referral</button>
			</form>
		</div>
	);
};

export default NewReferral;
