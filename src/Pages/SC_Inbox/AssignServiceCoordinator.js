import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import backendURL from "../../api"; // Adjust the import path as needed

const AssignServiceCoordinator = () => {
	const { caseId } = useParams(); // Get the caseId from the URL params
	const [serviceCoordinators, setServiceCoordinators] = useState([]);
	const [selectedCoordinator, setSelectedCoordinator] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// Fetch the list of service coordinators
	useEffect(() => {
		const fetchServiceCoordinators = async () => {
			try {
				const url = backendURL();
				const response = await fetch(`${url}/service-coordinators`);
				const data = await response.json();
				setServiceCoordinators(data); // Set the fetched service coordinators
			} catch (error) {
				setError("Failed to fetch service coordinators");
			}
		};
		fetchServiceCoordinators();
	}, []);

	// Handle assignment submission
	const handleAssign = async () => {
		if (!selectedCoordinator) {
			setError("Please select a service coordinator.");
			return;
		}

		try {
			const url = backendURL();
			const response = await fetch(`${url}/cases/${caseId}/assign`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					serviceCoordinatorId: selectedCoordinator, // Assign the selected service coordinator
				}),
			});

			if (response.ok) {
				navigate("/inbox"); // Redirect back to the inbox after assigning
			} else {
				setError("Failed to assign service coordinator.");
			}
		} catch (error) {
			setError("Error assigning service coordinator.");
		}
	};

	return (
		<div className="assignment-container">
			<h2>Assign Service Coordinator</h2>
			{error && <p className="error">{error}</p>}
			<div className="form-group">
				<label htmlFor="serviceCoordinator">
					Select Service Coordinator:
				</label>
				<select
					id="serviceCoordinator"
					value={selectedCoordinator}
					onChange={(e) => setSelectedCoordinator(e.target.value)}>
					<option value="">Select...</option>
					{serviceCoordinators.map((sc) => (
						<option key={sc.id} value={sc.id}>
							{sc.firstname} {sc.lastname}
						</option>
					))}
				</select>
			</div>
			<button onClick={handleAssign}>Assign Service Coordinator</button>
		</div>
	);
};

export default AssignServiceCoordinator;
