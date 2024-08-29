import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Referral.css";
// import "./navbar.css"

const Referral = () => {
	return (
		<>
			<div className="container-fluid">
				<Navbar />
				<form id="referralForm">
					<section id="childInfo">
						<div className="row">
							<div className="col whiteBox">
								<div className="row">
									<div className="col">
										<header>
											<h1>Child Info</h1>
										</header>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>First Name</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="firstName"
													type="text"
												/>
											</div>
										</div>
										{/* End of First Name Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Middle Name</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="middleName"
													type="text"
												/>
											</div>
										</div>
										{/* End of Middle Name Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Last Name</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="lastName"
													type="text"
												/>
											</div>
										</div>
										{/* End of Last Name Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Prefix</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<select id="prefix">
													<option></option>
													<option>Mr.</option>
													<option>Mrs.</option>
													<option>Sir</option>
												</select>
											</div>
										</div>
										{/* End of Prefix Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Suffix</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<select id="suffix">
													<option></option>
													<option>Sr.</option>
													<option>Jr.</option>
													<option>Third</option>
												</select>
											</div>
										</div>
										{/* End of Suffix Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Date of Birth</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="DOB"
													type="date"></input>
											</div>
										</div>
										{/* End of D.O.B. Section */}
									</div>
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Gestational Age</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<select id="suffix">
													<option></option>
													<option>25 Weeks</option>
													<option>26 Weeks</option>
													<option>27 Weeks</option>
													<option>28 Weeks</option>
													<option>29 Weeks</option>
													<option>30 Weeks</option>
													<option>31 Weeks</option>
													<option>32 Weeks</option>
													<option>33 Weeks</option>
													<option>34 Weeks</option>
													<option>35 Weeks</option>
													<option>36 Weeks</option>
													<option>37 Weeks</option>
													<option>38 Weeks</option>
													<option>39 Weeks</option>
													<option>40 Weeks</option>
													<option>41 Weeks</option>
													<option>42 Weeks</option>
												</select>
											</div>
										</div>
										{/* End of Gestational Age Section */}
									</div>
									{/* End of First Row */}
								</div>
								<div className="row">
									{/* Sex */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Sex</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="male"
													type="checkbox"
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="Female"
													type="checkbox"
												/>
											</div>
										</div>
										{/* End of Sex Section */}
									</div>
									{/* Foster Care */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>
														Child in Foster Care
													</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="fosterYes"
													type="checkbox"
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="fosterNo"
													type="checkbox"
												/>
											</div>
										</div>
										{/* End of Foster Care Section */}
									</div>
									{/* Child Address */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Child Address</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="childAddress"
													type="text"
												/>
												<span className="material-symbols-outlined">
													search
												</span>
											</div>
										</div>
										{/* End of Child Address Section */}
									</div>
									{/* Child Language */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Child Language</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<select
													id="childLanguage"
													required>
													<option value="">
														Select a language
													</option>
													<option value="amharic">
														Amharic
													</option>
													<option value="arabic">
														Arabic
													</option>
													<option value="armenian">
														Armenian
													</option>
													<option value="bengali">
														Bengali
													</option>
													<option value="bosnian">
														Bosnian
													</option>
													<option value="burmese">
														Burmese
													</option>
													<option value="cambodian">
														Cambodian
													</option>
													<option value="chinese">
														Chinese
													</option>
													<option value="dutch">
														Dutch
													</option>
													<option value="english">
														English
													</option>
													<option value="french">
														French
													</option>
													<option value="german">
														German
													</option>
													<option value="greek">
														Greek
													</option>
													<option value="gujarati">
														Gujarati
													</option>
													<option value="haitian">
														Haitian
													</option>
													<option value="hebrew">
														Hebrew
													</option>
													<option value="hindi">
														Hindi
													</option>
													<option value="hmong">
														Hmong
													</option>
													<option value="igbo">
														Igbo
													</option>
													<option value="italian">
														Italian
													</option>
													<option value="japanese">
														Japanese
													</option>
													<option value="korean">
														Korean
													</option>
													<option value="kurdish">
														Kurdish
													</option>
													<option value="laotian">
														Laotian
													</option>
													<option value="nepali">
														Nepali
													</option>
													<option value="pashto">
														Pashto
													</option>
													<option value="persian">
														Persian
													</option>
													<option value="polish">
														Polish
													</option>
													<option value="portuguese">
														Portuguese
													</option>
													<option value="punjabi">
														Punjabi
													</option>
													<option value="russian">
														Russian
													</option>
													<option value="serbo-croatian">
														Serbo-Croatian
													</option>
													<option value="somali">
														Somali
													</option>
													<option value="spanish">
														Spanish
													</option>
													<option value="swahili">
														Swahili
													</option>
													<option value="tagalog">
														Tagalog
													</option>
													<option value="telugu">
														Telugu
													</option>
													<option value="thai">
														Thai
													</option>
													<option value="tigrinya">
														Tigrinya
													</option>
													<option value="turkish">
														Turkish
													</option>
													<option value="urdu">
														Urdu
													</option>
													<option value="vietnamese">
														Vietnamese
													</option>
													<option value="yiddish">
														Yiddish
													</option>
													<option value="yoruba">
														Yoruba
													</option>
													<option value="other">
														Other
													</option>
												</select>
											</div>
										</div>
										{/* End of Child Language Section */}
									</div>
									{/* School District */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>School District</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<select
													id="school-districts"
													name="school-districts">
													<option></option>
													<option value="baldwinsville">
														Baldwinsville Central
														School District
													</option>
													<option value="east-syracuse-minoa">
														East Syracuse Minoa
														Central School District
													</option>
													<option value="fabius-pompey">
														Fabius-Pompey Central
														School District
													</option>
													<option value="fayetteville-manlius">
														Fayetteville-Manlius
														Central School District
													</option>
													<option value="jamesville-dewitt">
														Jamesville-Dewitt
														Central School District
													</option>
													<option value="jd">
														JD Central School
														District
													</option>
													<option value="lafayette">
														LaFayette Central School
														District
													</option>
													<option value="liverpool">
														Liverpool Central School
														District
													</option>
													<option value="lyncourt">
														Lyncourt Union Free
														School District
													</option>
													<option value="marcellus">
														Marcellus Central School
														District
													</option>
													<option value="north-syracuse">
														North Syracuse Central
														School District
													</option>
													<option value="onondaga">
														Onondaga Central School
														District
													</option>
													<option value="solvay">
														Solvay Union Free School
														District
													</option>
													<option value="tully">
														Tully Central School
														District
													</option>
													<option value="west-genesee">
														West Genesee Central
														School District
													</option>
													<option value="westhill">
														Westhill Central School
														District
													</option>
												</select>
											</div>
										</div>
										{/* End of School District Section */}
									</div>

									{/* End of Second Row */}
								</div>
								<div className="row">
									{/* Ethnicity */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Ethnicity</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="hispanic"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Hispanic or Latino</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="notHispanic"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Not Hispanic or Latino</p>
											</div>
										</div>
										{/* End of Ethnicity Section */}
									</div>
									{/* Race */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Race</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="americanAlaska"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>American or Alaska Native</p>
											</div>
											<div className="col">
												<input
													id="blackAfrican"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Black or African American</p>
											</div>
											<div className="col">
												<input
													id="White"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>White</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="asian"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Asian</p>
											</div>
											<div className="col">
												<input
													id="hawaiianPI"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>
													Native Hawaiian of Pacific
													Islander
												</p>
											</div>
										</div>
										{/* End of Race Section */}
									</div>
									{/* Referral Reason */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Referral Reason</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="suspected"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Suspected</p>
											</div>
											<div className="col">
												<input
													id="atRisk"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>At Risk of Disability</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="confirmed"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Confirmed</p>
											</div>
											<div className="col">
												<input
													id="riskHearing"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>At Risk Hearing Screening</p>
											</div>
										</div>
										{/* End of Ethnicity Section */}
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="referalSource">
						<div className="row">
							<div className="col whiteBox">
								<div className="row">
									<div className="col">
										<header>
											<h1>Child Info</h1>
										</header>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>First Name</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="referalSourceLastName"
													type="text"
												/>
											</div>
										</div>
										{/* End of First Name Section */}
									</div>
									{/* Last Name */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Last Name</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="referalSourceLastName"
													type="text"
												/>
											</div>
										</div>
										{/* End of Last Name Section */}
									</div>
									{/* Agency Name */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>
														Agency/Facility Name
													</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="referalSourceAgencyName"
													type="text"
												/>
											</div>
										</div>
										{/* End of Last Name Section */}
									</div>
									{/* Child Address */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>
														Referral Source Address
													</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="referralSourceAddress"
													type="text"
												/>
												<span className="material-symbols-outlined">
													search
												</span>
											</div>
										</div>
										{/* End of Referral Source Agency Address Address Section */}
									</div>

									{/* End of First Row */}
								</div>
								<div className="row">
									<div className="col">
										<div className="row">
											{/* Phone Number */}
											<div className="col">
												<div className="row">
													<div className="col">
														<header>
															<h2>
																Phone Number
															</h2>
														</header>
													</div>
												</div>
												<div className="row">
													<div className="col">
														<input
															id="referalSourcePhone"
															type="number"
														/>
													</div>
												</div>

												{/* End of Ref Phone Section */}
											</div>
											{/* Phone Number EXT */}
											<div className="col">
												<div className="row">
													<div className="col">
														<header>
															<h2>EXT:</h2>
														</header>
													</div>
												</div>
												<div className="row">
													<div className="col">
														<input
															id="referalSourcePhoneEXT"
															type="number"
														/>
													</div>
												</div>

												{/* End of Ref Phone EXT Section */}
											</div>
										</div>
										<div className="row">
											{/* Email */}
											<div className="col">
												<div className="row">
													<div className="col">
														<header>
															<h2>Email</h2>
														</header>
													</div>
												</div>
												<div className="row">
													<div className="col">
														<input
															id="referalSourceEmail"
															type="email"
														/>
													</div>
												</div>

												{/* End of Ref Email Section */}
											</div>
											{/* Phone Number EXT */}
											<div className="col">
												<div className="row">
													<div className="col">
														<header>
															<h2>Fax:</h2>
														</header>
													</div>
												</div>
												<div className="row">
													<div className="col">
														<input
															id="referalSourceFax"
															type="number"
														/>
													</div>
												</div>

												{/* End of Ref Fax Section */}
											</div>
										</div>
									</div>
									{/* Race */}
									<div className="col">
										<div className="row">
											<div className="col">
												<header>
													<h2>Referral Source</h2>
												</header>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="parentGuardian"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Parent/Legal Guardian</p>
											</div>

											<div className="col">
												<input
													id="OtherFam"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>
													Other Family Member
													(specify)
												</p>
											</div>
											<div className="col">
												<input
													id="OtherFamSpecify"
													type="text"
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="childPCP"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>
													Child Primary Healthcare
													Provider
												</p>
											</div>
											<div className="col">
												<input
													id="hospital"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Hospital or Clinic</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="commProgram"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>
													Community Program/EIP
													Provider
												</p>
											</div>
											<div className="col">
												<input
													id="otherSpecify"
													type="checkbox"
												/>
											</div>
											<div className="col">
												<p>Other Specify</p>
											</div>
											<div className="col">
												<input
													id="otherSpecify"
													type="text"
												/>
											</div>
										</div>
										{/* End of Referral OSurce Section */}
									</div>

									{/* End of Second Row */}
								</div>
							</div>
						</div>
					</section>
					<section id="parentGuardian">
						<div className="row">
							<div className="col whiteBox">
								<div className="row">
									<header>
										<h1>Parent/Guardian Contact Info</h1>
									</header>
								</div>
								<div className="row">
									<div className="col">
										<div className="row">
											<div className="col">
												<label>First Name</label>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<input
													id="firstName"
													type="text"
												/>
											</div>
										</div>
										{/* End of First Name Section */}
									</div>
									<div className="col">Last</div>
									<div className="col">Parent ADDRESS</div>
									<div className="col">Rel to child</div>
								</div>
								<div className="row">Phone</div>
								<div className="row">Phone</div>
								<div className="row">Email</div>
							</div>
						</div>
					</section>
					<section id="caseworker"></section>
					<section id="referralReason"></section>
					<section id="consultConfirm"></section>
				</form>
			</div>
		</>
	);
};

export default Referral;
