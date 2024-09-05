import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar";

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		month: "2-digit",
		day: "2-digit",
		year: "numeric",
	});
};

const Dashboard = () => {
	const [cases, setCases] = useState([]);
	const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
	const [filteredCases, setFilteredCases] = useState([]); // State for filtered cases
	const [viewMode, setViewMode] = useState("list"); // State to track view mode (icon or list)

	// Fetch cases from the backend when the component mounts
	useEffect(() => {
		const fetchCases = async () => {
			try {
				const response = await fetch("http://localhost:3001/cases");
				if (response.ok) {
					const data = await response.json();
					setCases(data);
					setFilteredCases(data); // Initialize with all cases
				} else {
					console.error("Failed to fetch cases");
				}
			} catch (error) {
				console.error("Error fetching cases:", error);
			}
		};

		fetchCases();
	}, []);

	// Update the filtered cases when search query changes
	useEffect(() => {
		if (searchQuery.trim()) {
			// If there's text in the search bar, filter the cases
			setFilteredCases(
				cases.filter(
					(caseItem) =>
						caseItem.firstname
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) ||
						caseItem.lastname
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) ||
						(caseItem.dateofbirth &&
							caseItem.dateofbirth.includes(searchQuery))
				)
			);
		} else {
			// If search query is empty, show all cases
			setFilteredCases(cases);
		}
	}, [searchQuery, cases]);

	return (
		<div className="container-fluid">
			<Navbar />
			<header>
				<div className="row">
					<div className="col">
						<h2>SERVICE COORDINATOR DASHBOARD</h2>
					</div>
					<div className="col-4">
						{/* View mode selector */}
						<select
							value={viewMode}
							onChange={(e) => setViewMode(e.target.value)}>
							<option value="icon">Icon View</option>
							<option value="list">List View</option>
						</select>
					</div>
					<div className="col-4">
						<div className="row">
							<div className="col-2">
								<span className="material-symbols-outlined">
									search
								</span>
							</div>
							<div className="col-10">
								{/* Bind the search input to the searchQuery state */}
								<input
									id="caseSearch"
									type="text"
									value={searchQuery}
									placeholder="Search by name or DOB"
									onChange={(e) =>
										setSearchQuery(e.target.value)
									} // Update search query state
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-2">{/* Spacer */}</div>
							<div className="col-4">
								<p>Filter</p>
							</div>
							<div className="col">{/* Spacer */}</div>
							<div className="col-4">
								<p>Search</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* If there are cases, display them */}
			{filteredCases.length > 0 ? (
				<div className="whiteWindow">
					{viewMode === "icon" ? (
						/* Icon view */
						<div className="row">
							{filteredCases.map((caseItem, index) => (
								<div className="col-2" key={index}>
									<div className="row">
										<div className="col folderIcon">
											<p>
												<Link
													to={`/Case/${caseItem.id}/cat`}>
													📁
												</Link>
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<p className="name">
												{caseItem.lastname},{" "}
												{caseItem.firstname}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						/* List view using row/col */
						<div className="list-view">
							<div className="row list-header">
								<div className="col-3">
									<strong>First Name</strong>
								</div>
								<div className="col-3">
									<strong>Last Name</strong>
								</div>
								<div className="col-3">
									<strong>Date of Birth</strong>
								</div>
								<div className="col-3">
									<strong>Actions</strong>
								</div>
							</div>
							{filteredCases.map((caseItem, index) => (
								<div className="row list-item" key={index}>
									<div className="col-3">
										{caseItem.firstname}
									</div>
									<div className="col-3">
										{caseItem.lastname}
									</div>
									<div className="col-3">
										{formatDate(caseItem.dateofbirth)}
									</div>
									<div className="col-3">
										<Link to={`/Case/${caseItem.id}/cat`}>
											View
										</Link>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			) : (
				<p>No cases available.</p>
			)}
		</div>
	);
};

export default Dashboard;
