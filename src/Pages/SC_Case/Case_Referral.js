import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backendURL from "../../api"; // Your backend URL helper

const Case_Referral = () => {
	const { caseId } = useParams(); // Get the case ID from the URL params
	const [referrals, setReferrals] = useState([]); // State for referrals
	const [loading, setLoading] = useState(true); // Loading state
	const [error, setError] = useState(null); // Error state

	// Fetch referrals based on the caseId
	useEffect(() => {
		const fetchReferrals = async () => {
			try {
				const url = backendURL(); // Get the backend URL
				const response = await fetch(
					`${url}/cases/${caseId}/referrals`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch referrals");
				}

				const data = await response.json();
				setReferrals(data); // Set the fetched referrals to state
			} catch (err) {
				setError(err.message); // Set error if fetching fails
			} finally {
				setLoading(false); // Stop loading once the fetch is done
			}
		};

		fetchReferrals();
	}, [caseId]); // Re-run this effect if caseId changes

	if (loading) return <p>Loading referrals...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="referrals-container">
			<h2>Referrals for Case ID: {caseId}</h2>
			{referrals.length > 0 ? (
				<ul>
					{referrals.map((referral) => (
						<li key={referral.id}>
							<strong>Referral ID:</strong> {referral.id} <br />
							<strong>Date:</strong>{" "}
							{new Date(referral.date).toLocaleDateString()}{" "}
							<br />
							<strong>Status:</strong> {referral.status} <br />
							<strong>Notes:</strong> {referral.notes}
						</li>
					))}
				</ul>
			) : (
				<p>No referrals found for this case.</p>
			)}
		</div>
	);
};

export default Case_Referral;
