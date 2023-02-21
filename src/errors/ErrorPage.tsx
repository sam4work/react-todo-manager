import { HomeIcon } from "@heroicons/react/20/solid"
import React from 'react'
import { Link, useRouteError } from "react-router-dom"



const ErrorPage = () : JSX.Element => {
	return(
		<div className="h-screen flex flex-col justify-center items-center space-y-10">


					<section className="bg-gradient-to-tr from-red-300 to-red-600 bg-clip-text">
						<h2 className="text-sm md:text-4xl lg:text-7xl text-transparent font-black ">
							Error
						</h2>
					</section>

					<section className="flex justify-around space-x-5 max-w-lg">

					<Link to={'/'} className="inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
						<HomeIcon className="h-5 w-5 text-white group-hover:text-gray-400" aria-hidden="true" />{" "}
						Home
					</Link>

					</section>
				</div>
	)
}


export default ErrorPage