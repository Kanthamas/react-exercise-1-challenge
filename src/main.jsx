import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import PageOne from "./components/1.2_pages/Page01";
import PageTwo from "./components/1.2_pages/Page02";
import PageThree from "./components/1.2_pages/Page03";
import Layout from "./components/Layout";
import "./index.css";
import { element } from "prop-types";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [{ path: "", element: <App /> }],
	},
	{
		path: "/page01",
		element: <Layout />,
		children: [{ path: "", element: <PageOne /> }],
	},
	{
		path: "/page02",
		element: <Layout />,
		children: [{ path: "", element: <PageTwo /> }],
	},
	{
		path: "/page03",
		element: <Layout />,
		children: [{ path: "", element: <PageThree /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
