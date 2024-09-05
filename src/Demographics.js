import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Demographics.css";
import Navbar from "./Components/Navbar";

// This is a test of sourcetree
const NewChild = () => {
	const navigate = useNavigate();

	const [childInfo, setChildInfo] = useState({
		firstname: "",
		// middleName: "",
		lastname: "",
		prefix: "",
		suffix: "",
		dateofbirth: "",
		gestationalage: "",
		ethnicity: "",
		race: "",
		address: "",
		language: "",
		schooldistrict: "",
	});

	const handleChange = (e) => {
		setChildInfo({
			...childInfo,
			[e.target.name]: e.target.value,
		});
		// console.log(childInfo);
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
		<>
			<Navbar />
			<div className="container">
				<h1>Add New Child</h1>
				<hr />
				<form onSubmit={createChild}>
					{/* First Name */}
					<div className="mb-3">
						<label htmlFor="firstname" className="form-label">
							First Name
						</label>
						<input
							type="text"
							className="form-control"
							id="firstname"
							name="firstname"
							value={childInfo.firstname}
							onChange={handleChange}
						/>
					</div>
					{/* Middle Name */}
					{/* <div className="mb-3">
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
					</div> */}
					{/* Last Name */}
					<div className="mb-3">
						<label htmlFor="lastname" className="form-label">
							Last Name
						</label>
						<input
							type="text"
							className="form-control"
							id="lastname"
							name="lastname"
							value={childInfo.lastname}
							onChange={handleChange}
						/>
					</div>
					{/* Prefix */}
					<div className="mb-3">
						<label htmlFor="prefix" className="form-label">
							Prefix
						</label>
						{/* <input
						type="text"
						className="form-control"
						id="prefix"
						name="prefix"
						value={childInfo.prefix}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="prefix"
							name="prefix"
							value={childInfo.prefix}
							onChange={handleChange}>
							<option value="">-- Select a prefix --</option>
							<option value="Mr.">Mr.</option>
							<option value="Mrs.">Mrs.</option>
							<option value="Miss">Miss</option>
							<option value="Ms.">Ms.</option>
							<option value="Dr.">Dr.</option>
							<option value="Prof.">Prof.</option>
							<option value="Rev.">Rev.</option>
							<option value="Sir">Sir</option>
							<option value="Madam">Madam</option>
							<option value="Mx.">Mx.</option>
							<option value="Hon.">Hon.</option>
							<option value="Lord">Lord</option>
							<option value="Lady">Lady</option>
						</select>
					</div>
					{/* Suffix */}
					<div className="mb-3">
						<label htmlFor="suffix" className="form-label">
							Suffix
						</label>
						{/* <input
						type="text"
						className="form-control"
						id="suffix"
						name="suffix"
						value={childInfo.suffix}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="suffix"
							name="suffix"
							value={childInfo.suffix}
							onChange={handleChange}>
							<option value="">-- Select a suffix --</option>
							<option value="Jr.">Jr.</option>
							<option value="Sr.">Sr.</option>
							<option value="II">II</option>
							<option value="III">III</option>
							<option value="IV">IV</option>
							<option value="V">V</option>
							<option value="PhD">PhD</option>
							<option value="MD">MD</option>
							<option value="DDS">DDS</option>
							<option value="Esq.">Esq.</option>
							<option value="CPA">CPA</option>
						</select>
					</div>
					{/* DOB */}
					<div className="mb-3">
						<label htmlFor="dateofbirth" className="form-label">
							Date of Birth
						</label>
						<input
							type="date"
							className="form-control"
							id="dateofbirth"
							name="dateofbirth"
							value={childInfo.dateofbirth}
							onChange={handleChange}
						/>
					</div>
					{/* Gestational Age */}
					<div className="mb-3">
						<label htmlFor="gestationalage" className="form-label">
							Gestational Age (in weeks)
						</label>
						{/* <input
						type="number"
						className="form-control"
						id="gestationalage"
						name="gestationalage"
						value={childInfo.gestationalage}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="gestationalage"
							name="gestationalage"
							value={childInfo.gestationalage}
							onChange={handleChange}>
							<option value="">
								-- Select gestational age --
							</option>

							<option value="1 weeks">1 week</option>
							<option value="2 weeks">2 weeks</option>
							<option value="3 weeks">3 weeks</option>
							<option value="4 weeks">4 weeks</option>
							<option value="5 weeks">5 weeks</option>
							<option value="6 weeks">6 weeks</option>
							<option value="7 weeks">7 weeks</option>
							<option value="8 weeks">8 weeks</option>
							<option value="9 weeks">9 weeks</option>
							<option value="10 weeks">10 weeks</option>
							<option value="11 weeks">11 weeks</option>
							<option value="12 weeks">12 weeks</option>
							<option value="13 weeks">13 weeks</option>
							<option value="14 weeks">14 weeks</option>
							<option value="15 weeks">15 weeks</option>
							<option value="16 weeks">16 weeks</option>
							<option value="17 weeks">17 weeks</option>
							<option value="18 weeks">18 weeks</option>
							<option value="19 weeks">19 weeks</option>
							<option value="20 weeks">20 weeks</option>
							<option value="21 weeks">21 weeks</option>
							<option value="22 weeks">22 weeks</option>
							<option value="23 weeks">23 weeks</option>
							<option value="24 weeks">24 weeks</option>
							<option value="25 weeks">25 weeks</option>
							<option value="26 weeks">26 weeks</option>
							<option value="27 weeks">27 weeks</option>
							<option value="28 weeks">28 weeks</option>
							<option value="29 weeks">29 weeks</option>
							<option value="30 weeks">30 weeks</option>
							<option value="31 weeks">31 weeks</option>
							<option value="32 weeks">32 weeks</option>
							<option value="33 weeks">33 weeks</option>
							<option value="34 weeks">34 weeks</option>
							<option value="35 weeks">35 weeks</option>
							<option value="36 weeks">36 weeks</option>
							<option value="37 weeks">37 weeks</option>
							<option value="38 weeks">38 weeks</option>
							<option value="39 weeks">39 weeks</option>
							<option value="40 weeks">40 weeks</option>
							<option value="41 weeks">41 weeks</option>
							<option value="42 weeks">42 weeks</option>
						</select>
					</div>
					{/* Ethnicity */}
					<div className="mb-3">
						<label htmlFor="ethnicity" className="form-label">
							Ethnicity (U.S. Federally Recognized)
						</label>
						{/* <input
						type="text"
						className="form-control"
						id="ethnicity"
						name="ethnicity"
						value={childInfo.ethnicity}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="ethnicity"
							name="ethnicity"
							value={childInfo.ethnicity}
							onChange={handleChange}>
							<option value="">-- Select an ethnicity --</option>
							<option value="Hispanic or Latino">
								Hispanic or Latino
							</option>
							<option value="Not Hispanic or Latino">
								Not Hispanic or Latino
							</option>
						</select>
					</div>
					{/* Race */}
					<div className="mb-3">
						<label htmlFor="race" className="form-label">
							Race (U.S. Federally Recognized)
						</label>
						{/* <input
						type="text"
						className="form-control"
						id="race"
						name="race"
						value={childInfo.race}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="race"
							name="race"
							value={childInfo.race}
							onChange={handleChange}>
							<option value="">-- Select a race --</option>
							<option value="White">White</option>
							<option value="Black or African American">
								Black or African American
							</option>
							<option value="American Indian or Alaska Native">
								American Indian or Alaska Native
							</option>
							<option value="Asian">Asian</option>
							<option value="Native Hawaiian or Other Pacific Islander">
								Native Hawaiian or Other Pacific Islander
							</option>
						</select>
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
						{/* <input
						type="text"
						className="form-control"
						id="language"
						name="language"
						value={childInfo.language}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="language"
							name="language"
							value={childInfo.language}
							onChange={handleChange}>
							<option value="">-- Select a language --</option>
							<option value="English">English</option>
							<option value="Spanish">Spanish</option>
							<option value="Chinese">
								Chinese (Mandarin, Cantonese)
							</option>
							<option value="Tagalog">Tagalog</option>
							<option value="Vietnamese">Vietnamese</option>
							<option value="French">French</option>
							<option value="Arabic">Arabic</option>
							<option value="Korean">Korean</option>
							<option value="Russian">Russian</option>
							<option value="German">German</option>
							<option value="Portuguese">Portuguese</option>
							<option value="Japanese">Japanese</option>
							<option value="Hindi">Hindi</option>
							<option value="Urdu">Urdu</option>
							<option value="Persian">Persian (Farsi)</option>
							<option value="Italian">Italian</option>
							<option value="Polish">Polish</option>
							<option value="Haitian Creole">
								Haitian Creole
							</option>
							<option value="Hebrew">Hebrew</option>
							<option value="Bengali">Bengali</option>
							<option value="Gujarati">Gujarati</option>
							<option value="Greek">Greek</option>
							<option value="Punjabi">Punjabi</option>
							<option value="Thai">Thai</option>
							<option value="Swahili">Swahili</option>
							<option value="Somali">Somali</option>
							<option value="Burmese">Burmese</option>
							<option value="Amharic">Amharic</option>
						</select>
					</div>
					{/* School District */}
					<div className="mb-3">
						<label htmlFor="schooldistrict" className="form-label">
							School District (Onondaga County)
						</label>
						{/* <input
						type="text"
						className="form-control"
						id="schoolDistrict"
						name="schoolDistrict"
						value={childInfo.schoolDistrict}
						onChange={handleChange}
					/> */}
						<select
							className="form-control"
							id="schooldistrict"
							name="schooldistrict"
							value={childInfo.schooldistrict}
							onChange={handleChange}>
							<option value="">
								-- Select a school district --
							</option>
							<option value="Baldwinsville Central School District">
								Baldwinsville Central School District
							</option>
							<option value="East Syracuse Minoa Central School District">
								East Syracuse Minoa Central School District
							</option>
							<option value="Fabius-Pompey Central School District">
								Fabius-Pompey Central School District
							</option>
							<option value="Fayetteville-Manlius Central School District">
								Fayetteville-Manlius Central School District
							</option>
							<option value="Jamesville-Dewitt Central School District">
								Jamesville-Dewitt Central School District
							</option>
							<option value="Jordan-Elbridge Central School District">
								Jordan-Elbridge Central School District
							</option>
							<option value="LaFayette Central School District">
								LaFayette Central School District
							</option>
							<option value="Liverpool Central School District">
								Liverpool Central School District
							</option>
							<option value="Lyncourt Union Free School District">
								Lyncourt Union Free School District
							</option>
							<option value="Marcellus Central School District">
								Marcellus Central School District
							</option>
							<option value="North Syracuse Central School District">
								North Syracuse Central School District
							</option>
							<option value="Onondaga Central School District">
								Onondaga Central School District
							</option>
							<option value="Skaneateles Central School District">
								Skaneateles Central School District
							</option>
							<option value="Solvay Union Free School District">
								Solvay Union Free School District
							</option>
							<option value="Syracuse City School District">
								Syracuse City School District
							</option>
							<option value="Tully Central School District">
								Tully Central School District
							</option>
							<option value="West Genesee Central School District">
								West Genesee Central School District
							</option>
							<option value="Westhill Central School District">
								Westhill Central School District
							</option>
						</select>
					</div>
					<button type="submit" className="btn btn-success">
						Add Child
					</button>
				</form>
			</div>
		</>
	);
};

export default NewChild;
