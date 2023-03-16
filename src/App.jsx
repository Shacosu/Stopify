import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";

import Metro from "./views/Metro";
import Balance from "./views/Balance";



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomeLayout /> }>
					<Route index element={<Metro />} />
					<Route path="balance" element={<Balance />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
