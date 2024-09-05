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
import Referral from "./Pages/Referral/Referral";
import Demographics from "./Demographics";
import Case_Evaluation from "./Pages/SC_Case/Case_Evaluation";
import Case_SC_Notes from "./Pages/SC_Case/Case_SC_Notes";
import Case_Records from "./Pages/SC_Case/Case_Records";
import Case_Consents_Auths from "./Pages/SC_Case/Case_Consents_Auths";
import Case_Bill_Insurance from "./Pages/SC_Case/Case_Bill_Insurance";
import Case_Travel from "./Pages/SC_Case/Case_Travel";
import Case_CPSE_Transition from "./Pages/SC_Case/Case_CPSE_Transition";

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
		path: "/case/:id/:animal",
		element: <Case />,
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
		path: "/case-records",
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
		path: "/referral",
		element: <Referral />,
	},
	{
		path: "/inbox",
		element: <Inbox />,
	},
	{
		path: "/demographics",
		element: <Demographics />,
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
