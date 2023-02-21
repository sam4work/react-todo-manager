import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
	RouterProvider,
} from "react-router-dom"

import AppRouter from "./router"
// import AuthProvider from "./context/AuthContext"
import ThemeProvider from "./context/ThemeContext"



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
			<ThemeProvider>
			{/* <AuthProvider> */}
			<RouterProvider router={AppRouter} />
			{/* </AuthProvider> */}
			</ThemeProvider>
  </React.StrictMode>
)
