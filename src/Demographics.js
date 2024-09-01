import { useNavigate } from "react-router-dom";
import { useState } from "react";
// This is a test of sourcetree
const NewChild = () => {
	const navigate = useNavigate();

	const [childInfo, setChildInfo] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		prefix: "",
		suffix: "",
		dob: "",
		gestationalAge: "",
		ethnicity: "",
		race: "",
		address: "",
		language: "",
		schoolDistrict: "",
	});

	const handleChange = (e) => {
		setChildInfo({
			...childInfo,
			[e.target.name]: e.target.value,
		});
	};

	const createChild = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(`http://localhost:3001/cases`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(childInfo),
			});

			if (response.ok) {
				navigate("/");
			} else {
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
				{/* First Name */}
				<div className="mb-3">
					<label htmlFor="firstName" className="form-label">
						First Name
					</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						name="firstName"
						value={childInfo.firstName}
						onChange={handleChange}
					/>
				</div>
				{/* Middle Name */}
				<div className="mb-3">
					<label htmlFor="middleName" className="form-label">
						Middle Name
					</label>
					<input
						type="text"
						className="form-control"
						id="middleName"
						name="middleName"
						value={childInfo.middleName}
						onChange={handleChange}
					/>
				</div>
				{/* Last Name */}
				<div className="mb-3">
					<label htmlFor="lastName" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						name="lastName"
						value={childInfo.lastName}
						onChange={handleChange}
					/>
				</div>
				{/* Prefix */}
				<div className="mb-3">
					<label htmlFor="prefix" className="form-label">
						Prefix
					</label>
					<input
						type="text"
						className="form-control"
						id="prefix"
						name="prefix"
						value={childInfo.prefix}
						onChange={handleChange}
					/>
				</div>
				{/* Suffix */}
				<div className="mb-3">
					<label htmlFor="suffix" className="form-label">
						Suffix
					</label>
					<input
						type="text"
						className="form-control"
						id="suffix"
						name="suffix"
						value={childInfo.suffix}
						onChange={handleChange}
					/>
				</div>
				{/* DOB */}
				<div className="mb-3">
					<label htmlFor="dob" className="form-label">
						Date of Birth
					</label>
					<input
						type="date"
						className="form-control"
						id="dob"
						name="dob"
						value={childInfo.dob}
						onChange={handleChange}
					/>
				</div>
				{/* Gestational Age */}
				<div className="mb-3">
					<label htmlFor="gestationalAge" className="form-label">
						Gestational Age (in weeks)
					</label>
					<input
						type="number"
						className="form-control"
						id="gestationalAge"
						name="gestationalAge"
						value={childInfo.gestationalAge}
						onChange={handleChange}
					/>
				</div>
				{/* Ethnicity */}
				<div className="mb-3">
					<label htmlFor="ethnicity" className="form-label">
						Ethnicity (U.S. Federally Recognized)
					</label>
					<input
						type="text"
						className="form-control"
						id="ethnicity"
						name="ethnicity"
						value={childInfo.ethnicity}
						onChange={handleChange}
					/>
				</div>
				{/* Race */}
				<div className="mb-3">
					<label htmlFor="race" className="form-label">
						Race (U.S. Federally Recognized)
					</label>
					<input
						type="text"
						className="form-control"
						id="race"
						name="race"
						value={childInfo.race}
						onChange={handleChange}
					/>
				</div>
				{/* Address */}
				<div className="mb-3">
					<label htmlFor="address" className="form-label">
						Child Address
					</label>
					<input
						type="text"
						className="form-control"
						id="address"
						name="address"
						value={childInfo.address}
						onChange={handleChange}
					/>
				</div>
				{/* Language */}
				<div className="mb-3">
					<label htmlFor="language" className="form-label">
						Child Language (U.S. Federally Recognized)
					</label>
					<input
						type="text"
						className="form-control"
						id="language"
						name="language"
						value={childInfo.language}
						onChange={handleChange}
					/>
				</div>
				{/* School District */}
				<div className="mb-3">
					<label htmlFor="schoolDistrict" className="form-label">
						School District (Onondaga County)
					</label>
					<input
						type="text"
						className="form-control"
						id="schoolDistrict"
						name="schoolDistrict"
						value={childInfo.schoolDistrict}
						onChange={handleChange}
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
