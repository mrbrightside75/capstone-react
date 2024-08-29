import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewChild = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dob, setDob] = useState("");

	const createChild = async (event) => {
		event.preventDefault();
		const form = event.target;

		const child = {
			firstname: form.elements.firstNameInput.value,
			lastname: form.elements.lastNameInput.value,
			dateofbirth: form.elements.dobInput.value,
		};

		try {
			const response = await fetch(`http://localhost:3001/cases`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(child),
			});

			if (response.ok) {
				// Redirect or give feedback to the user
				navigate("/");
			} else {
				// Handle error
				console.error("Failed to create a new case.");
			}
		} catch (error) {
			console.error("Error creating a new case:", error);
		}
	};

	return (
		<div className="container">
			<h1>Add New Child</h1>
			<hr />
			<form onSubmit={createChild}>
				<div className="mb-3">
					<label htmlFor="firstNameInput" className="form-label">
						First Name
					</label>
					<input
						type="text"
						className="form-control"
						id="firstNameInput"
						placeholder="Child's First Name"
						value={firstName}
						onChange={(evt) => {
							setFirstName(evt.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="lastNameInput" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="lastNameInput"
						placeholder="Child's Last Name"
						value={lastName}
						onChange={(evt) => {
							setLastName(evt.target.value);
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="dobInput" className="form-label">
						Date of Birth
					</label>
					<input
						type="date"
						className="form-control"
						id="dobInput"
						value={dob}
						onChange={(evt) => {
							setDob(evt.target.value);
						}}
					/>
				</div>
				<button type="submit" className="btn btn-success">
					Add Child
				</button>
			</form>
		</div>
	);
};

export default NewChild;
