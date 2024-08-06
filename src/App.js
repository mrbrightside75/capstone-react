// #1 Import functions and components from react-router-dom which is a package we
//installed using the terminal command: npm install react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import LoginReset from "./Pages/Login/LoginReset";
import Dashboard from "./Pages/SC_Dashboard/Dashboard";


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