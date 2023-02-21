import React from 'react'
import { Outlet } from "react-router-dom"

const GuestLayout = () :JSX.Element => {
		return (
				<>
				<Outlet/>
				</>
		)
}

export default GuestLayout