import React from "react";
import Sidebar from "./components/Sidebar";
import Router from "./router";

const App = () => {
	return (
		<div className="flex overflow-hidden h-screen w-screen">
			<div className="w-1/6 h-full">
				<Sidebar />
			</div>
			<div className="w-5/6 h-full">
				<Router />
			</div>
		</div>
	);
};

export default App;
