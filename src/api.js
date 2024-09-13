const backendURL = () => {
	if (window.location.href === "http:localhost:3000") {
		return "http:localhost:3001";
	} else {
		return "https://capstone-backend-little-water-8484.fly.dev";
	}
};
export default backendURL;
