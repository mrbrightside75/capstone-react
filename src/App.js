// #1 Import functions and components from react-router-dom which is a package we
//installed using the terminal command: npm install react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import LoginReset from "./Pages/Login/LoginReset";
import Dashboard from "./Pages/SC_Dashboard/Dashboard";
import Case from "./Pages/SC_Case/Case";
import Inbox from "./Pages/SC_Inbox/Inbox";
import Case_IFSP from "./Pages/SC_Case/Case_IFSP";
import CreateAccount from "./Pages/Login/CreateAccount";
import NewReferral from "./Pages/Referral/NewReferral";
import Demographics from "./Demographics";
import Case_Referral from "./Pages/SC_Case/Case_Referral";
import Case_Evaluation from "./Pages/SC_Case/Case_Evaluation";
import Case_SC_Notes from "./Pages/SC_Case/Case_SC_Notes";
import Case_Records from "./Pages/SC_Case/Case_Records";
import Case_Consents_Auths from "./Pages/SC_Case/Case_Consents_Auths";
import Case_Bill_Insurance from "./Pages/SC_Case/Case_Bill_Insurance";
import Case_Travel from "./Pages/SC_Case/Case_Travel";
import Case_CPSE_Transition from "./Pages/SC_Case/Case_CPSE_Transition";
import AssignServiceCoordinator from "./Pages/SC_Inbox/AssignServiceCoordinator";
import Validate from "./Pages/SC_Inbox/Validate";

// #3 Set up routes that connect paths to elements, combined they make a route
//which makes them their own page accessible in the browswer.
const myRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/loginreset",
		element: <LoginReset />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/inbox",
		element: <Inbox />,
	},
	{
		path: "/case/:caseId",
		element: <Case />,
	},
	{
		path: "/:caseId/case_referral",
		element: <Case_Referral />,
	},
	{
		path: "/case-ifsp",
		element: <Case_IFSP />,
	},
	{
		path: "/case-evaluation",
		element: <Case_Evaluation />,
	},
	{
		path: "/case-sc-notes",
		element: <Case_SC_Notes />,
	},
	{
		path: "/case-records/:caseId",
		element: <Case_Records />,
	},
	{
		path: "/case-consents-auths",
		element: <Case_Consents_Auths />,
	},
	{
		path: "/case-bill-insurance",
		element: <Case_Bill_Insurance />,
	},
	{
		path: "/case-travel",
		element: <Case_Travel />,
	},
	{
		path: "/case-cpse-transition",
		element: <Case_CPSE_Transition />,
	},
	{
		path: "/createAccount",
		element: <CreateAccount />,
	},
	{
		path: "/case/:caseId/newreferral",
		element: <NewReferral />,
	},
	{
		path: "/inbox",
		element: <Inbox />,
	},
	{
		path: "/demographics",
		element: <Demographics />,
	},
	{
		path: "/assign/:caseId",
		element: <AssignServiceCoordinator />,
	},
	{
		path: "/cases/:caseId/validate",
		element: <Validate />,
	},
]);

function App() {
	return (
		<div className="App">
			{/* #4 Use RouterProvider from react-router to show our routes
			based off path in browser */}
			<RouterProvider router={myRoutes} />
		</div>
	);
}

export default App;

// #1 Import necessary functions and components
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // Change to BrowserRouter for use with Clerk
// import "./App.css";
// import {
// 	ClerkProvider,
// 	SignIn,
// 	SignedIn,
// 	SignedOut,
// 	RedirectToSignIn,
// 	useUser,
// } from "@clerk/clerk-react"; // Import Clerk components for auth

// import LoginReset from "./Pages/Login/LoginReset";
// import Dashboard from "./Pages/SC_Dashboard/Dashboard";
// import Case from "./Pages/SC_Case/Case";
// import Inbox from "./Pages/SC_Inbox/Inbox";
// import Case_IFSP from "./Pages/SC_Case/Case_IFSP";
// import CreateAccount from "./Pages/Login/CreateAccount";
// import Referral from "./Pages/Referral/Referral";
// import Demographics from "./Demographics";
// import Case_Evaluation from "./Pages/SC_Case/Case_Evaluation";
// import Case_SC_Notes from "./Pages/SC_Case/Case_SC_Notes";
// import Case_Records from "./Pages/SC_Case/Case_Records";
// import Case_Consents_Auths from "./Pages/SC_Case/Case_Consents_Auths";
// import Case_Bill_Insurance from "./Pages/SC_Case/Case_Bill_Insurance";
// import Case_Travel from "./Pages/SC_Case/Case_Travel";
// import Case_CPSE_Transition from "./Pages/SC_Case/Case_CPSE_Transition";

// // Clerk API key from your .env file
// const clerkFrontendApiKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// // Helper component to manage role-based access to the dashboard
// const DashboardRoute = () => {
// 	const { user } = useUser();

// 	if (user.publicMetadata.role === "Service Coordinator") {
// 		return <Dashboard assignedOnly />;
// 	} else {
// 		return <Dashboard />;
// 	}
// };

// function App() {
// 	return (
// 		<ClerkProvider publishableKey={clerkFrontendApiKey}>
// 			<BrowserRouter>
// 				<Routes>
// 					{/* Public Routes */}
// 					<Route path="/loginreset" element={<LoginReset />} />
// 					<Route path="/createAccount" element={<CreateAccount />} />
// 					<Route path="/referral" element={<Referral />} />
// 					<Route path="/demographics" element={<Demographics />} />

// 					{/* Protected Routes - Only accessible when signed in */}
// 					<Route
// 						path="/dashboard"
// 						element={
// 							<SignedIn>
// 								<DashboardRoute />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/inbox"
// 						element={
// 							<SignedIn>
// 								<Inbox />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case/:id/:animal"
// 						element={
// 							<SignedIn>
// 								<Case />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-ifsp"
// 						element={
// 							<SignedIn>
// 								<Case_IFSP />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-evaluation"
// 						element={
// 							<SignedIn>
// 								<Case_Evaluation />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-sc-notes"
// 						element={
// 							<SignedIn>
// 								<Case_SC_Notes />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-records"
// 						element={
// 							<SignedIn>
// 								<Case_Records />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-consents-auths"
// 						element={
// 							<SignedIn>
// 								<Case_Consents_Auths />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-bill-insurance"
// 						element={
// 							<SignedIn>
// 								<Case_Bill_Insurance />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-travel"
// 						element={
// 							<SignedIn>
// 								<Case_Travel />
// 							</SignedIn>
// 						}
// 					/>
// 					<Route
// 						path="/case-cpse-transition"
// 						element={
// 							<SignedIn>
// 								<Case_CPSE_Transition />
// 							</SignedIn>
// 						}
// 					/>

// 					{/* Default Route */}
// 					<Route
// 						path="/"
// 						element={
// 							<SignedOut>
// 								<SignIn />
// 							</SignedOut>
// 						}
// 					/>

// 					{/* Redirect to login if not signed in */}
// 					<Route path="*" element={<RedirectToSignIn />} />
// 				</Routes>
// 			</BrowserRouter>
// 		</ClerkProvider>
// 	);
// }

// export default App;
