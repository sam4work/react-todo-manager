import { MouseEvent, MouseEventHandler, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from "./auth/Login"
import { Link, Outlet } from "react-router-dom"
import { useThemeContext } from "./context/ThemeContext"

function App() {
  const [count, setCount] = useState(0)

		const {dark,toggleDark} = useThemeContext()

		

  return (
				<div className="h-screen flex flex-col justify-center items-center space-y-10 dark:bg-gray-900">


					<section className="bg-gradient-to-tr from-blue-500 to-pink-600 bg-clip-text">
						<h2 className="text-sm md:text-4xl lg:text-7xl text-transparent font-black ">
							Welcome
						</h2>
					</section>

					<section className="flex justify-around space-x-5 max-w-lg">

					<Link to={'/login'} className="inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
						Login
					</Link>

					<Link to={'/register'} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
						Register
					</Link>

					</section>

					<section className="flex justify-around space-x-5 max-w-lg">

					 <button type="button" onClick={() => toggleDark()} className="inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
						Toogle Theme {JSON.stringify(dark)}
					</button>
			
					</section>
				</div>
  )
}

export default App
