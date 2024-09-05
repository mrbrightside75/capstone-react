import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Case_IFSP.css";

const Case_Travel = () => {
	return (
		<div className="container-fluid" id="case_ifsp">
			<Navbar />
			<div id="header" className="row">
				<div className="col">
					<h1 id="pageTitle">TRAVEL</h1>
				</div>
				{/* End of header section */}
			</div>
			<div className="row">
				<div className="col-6">
					<div className="row">
						<div className="col-8">
							<h2>ADD NEW IFSP:</h2>
						</div>
						<div className="col-4">
							<button className="btn btn-primary">ADD</button>
						</div>
					</div>
				</div>
				{/* End of file picker */}
			</div>
			<div className="row">
				<div className="col">
					<div className="row">ACTIVE IFSP</div>
					<div className="row fileSection">
						<div className="col-2">
							<h3>FILE:</h3>
						</div>
						<div className="col-7">
							<p>SMITH_JOHN.pdf</p>
						</div>
						<div className="col-3">
							<button className="btn btn-primary">View</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Case_Travel;
