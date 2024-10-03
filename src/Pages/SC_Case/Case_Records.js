import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backendURL from "../../api"; // Adjust the import path as needed

const Case_Records = () => {
	const { caseId } = useParams(); // Get the caseId from the URL params
	const [fileUrl, setFileUrl] = useState(null); // State to hold the file URL
	const [error, setError] = useState(null);

	// Fetch the file (PDF) associated with the case
	useEffect(() => {
		const fetchFile = async () => {
			try {
				const url = backendURL();
				const response = await fetch(`${url}/cases/${caseId}/files`);
				if (!response.ok) {
					throw new Error("Failed to fetch files");
				}
				const files = await response.json();

				if (files.length > 0) {
					const fileData = files[0]; // Assuming you're using the first file

					// Convert the buffer data into a Blob
					const blob = new Blob(
						[new Uint8Array(fileData.data.data)],
						{
							type: "application/pdf",
						}
					);

					// Create an object URL for the Blob
					const fileUrl = URL.createObjectURL(blob);
					setFileUrl(fileUrl);
				} else {
					throw new Error("No files available");
				}
			} catch (err) {
				setError(err.message);
			}
		};

		fetchFile();
	}, [caseId]);

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!fileUrl) {
		return <p>Loading file...</p>;
	}

	return (
		<div className="case-records-container">
			<h2>Case Records for Case ID: {caseId}</h2>

			{/* Display the PDF inline */}
			{fileUrl && (
				<div className="pdf-viewer">
					<iframe
						src={fileUrl}
						width="100%"
						height="600px"
						title="Case PDF"></iframe>
				</div>
			)}
		</div>
	);
};

export default Case_Records;
