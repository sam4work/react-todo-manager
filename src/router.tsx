import React from 'react'
import App from './App'


import {
	createBrowserRouter
} from "react-router-dom"
import Register from "./auth/Register";
import Login from "./auth/Login";
import ErrorPage from "./errors/ErrorPage";
import Dashboard from "./dashboard/Index";
import PrivateRoute from "./components/PrivateRoute";
import GuestLayout from "./components/layout/GuestLayout";

const AppRouter = createBrowserRouter([
	{
			path: "/",
			element: <GuestLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element : <App />
				},
				{
					path: "/register",
					element : <Register />
				},
				{
					path: "/login",
					element : <Login />
				},
				{
					path: "/dashboard",
					element : <Dashboard />
					
				},
			]
	},


]);



export default AppRouter 