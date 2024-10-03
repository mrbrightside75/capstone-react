import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backendURL from "../../api"; // Your backend URL helper
import { Link } from "react-router-dom";

const Case_Referral = () => {
	const [referrals, setReferrals] = useState([]); // State for referrals
	const [loading, setLoading] = useState(true); // Loading state
	const [error, setError] = useState(null); // Error state
	const { caseId } = useParams(); // Get caseId from URL params

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
		<div className="referrals-container" id="referral">
			<h2>Referrals for Case ID: {caseId}</h2>

			{/* Display referrals if available */}
			{referrals.length > 0 ? (
				<div className="container">
					<div className="row">
						{referrals.map((referral) => (
							<div className="col-md-6 mb-4" key={referral.id}>
								<div className="card h-100">
									<div className="card-body">
										<h5 className="card-title">
											Referral ID: {referral.id}
										</h5>
										<div className="row">
											<div className="col-6">
												<p className="card-text">
													<strong>Date:</strong>{" "}
													{referral.referralDate}
												</p>
											</div>

											<div className="col-12">
												<p className="card-text">
													<strong>Notes:</strong>{" "}
													{referral.referralReason ||
														"No notes available"}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<p>No referrals found for this case.</p>
			)}

			{/* Always display the "Add New Referral" button */}
			<Link to={`/case/${caseId}/newreferral`}>
				<div className="row caseMenuItem">
					<div className="col-5">{/* Spacer */}</div>
					<div className="col-3">
						<button className="btn btn-primary">
							New Referral
						</button>
					</div>
					<div className="col">{/* Spacer */}</div>
				</div>
			</Link>
		</div>
	);
};

export default Case_Referral;
