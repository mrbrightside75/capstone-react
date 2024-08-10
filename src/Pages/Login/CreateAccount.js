import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
const CreateAccount = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			// Since we cant change the formData variable which is set as an object- it is immutable; we must "copy" the data into
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form data submitted:", formData);
	};

	return (
		<div className="container">
			<Navbar />
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					<h2>Create Account</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="formUsername">Username</label>
							<input
								type="text"
								className="form-control"
								id="formUsername"
								name="username"
								value={formData.username}
								onChange={handleChange}
								placeholder="Enter username"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="formEmail">Email address</label>
							<input
								type="email"
								className="form-control"
								id="formEmail"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter email"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="formPassword">Password</label>
							<input
								type="password"
								className="form-control"
								id="formPassword"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Password"
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Create Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
