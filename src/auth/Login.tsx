
import React, { FormEvent, useState } from "react"
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate, } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () : JSX.Element => {

	const [email, setEmail] = useState('hindolosam@yahoo.co.uk')
	const [password, setPassword] = useState('Password1234')
	const [errors, setErrors] = useState([])
	const [status, setStatus] = useState(null)

	const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
	const navigate = useNavigate()

	const {user, error,login} = useAuth({
		middleware:"guest",
		redirectIfAuthenticated: "/dashboard"
	})


	const handleLoginForm = async (event:FormEvent) => {
		event.preventDefault()


		login({setErrors,setStatus,email,password})

		if(!error){
			// setIsSubmitting(false)
			// setTimeout(()=> navigate("/dashboard"),1000)
		}


	}

	return (
		<>
				<div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
						<div className="w-full max-w-md space-y-8">
								<div>
										<Link to={'/'}>
										<img
												className="mx-auto h-12 w-auto"
												src="/images/mark.svg"
												alt="Your Company"
										/>
										</Link>
										<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
												Sign in to your account

												<br />
												{/* {JSON.stringify(document.cookie)} */}
												{error}
										</h2>
							
								</div>
								<form onSubmit={handleLoginForm}  className="mt-8 space-y-6" >
										<input type="hidden" name="remember" defaultValue="true" />
										<div className="-space-y-px rounded-md shadow-sm">
												<div>
														<label htmlFor="email-address" className="sr-only">
																Email address
														</label>
														<input
																id="email-address"
																name="email"
																type="email"
																defaultValue={email}
																onChange={(e) => setEmail(e.target.value)}
																autoComplete="email"
																required
																className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200 "
																placeholder="Email address"
														/>
												</div>
												<div>
														<label htmlFor="password" className="sr-only">
																Password
														</label>
														<input
																id="password"
																name="password"
																type="password"
																defaultValue={password}
																onChange={(e) => setPassword(e.target.value)}
																autoComplete="current-password"
																required
																className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200"
																placeholder="Password"
														/>
												</div>
										</div>

										<div className="flex items-center justify-between">
												<div className="flex items-center">
														<input
																id="remember-me"
																name="remember-me"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
																Remember me
														</label>
												</div>

												<div className="text-sm">
														<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
																Forgot your password?
														</a>
												</div>
										</div>

										<div>
										<button
														type="submit"
														disabled={isSubmitting}
														className=  
															"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"							>
														<span className="absolute inset-y-0 left-0 flex items-center pl-3">
																<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
														</span>
														<span className={isSubmitting ? "animate-pulse text-gray-400" : ""}>
														{ isSubmitting ? "Processing"  : "Login" }
														</span>
												</button>
										</div>
								</form>
								<div>
								<p className="mt-2 text-center text-sm text-gray-600">
												Don't have an account? {' '}
												<Link to={'/register'} className="font-medium text-indigo-600 hover:text-indigo-500">
														Create new account.
												</Link>
										</p>
								</div>
						</div>
				</div>
		</>
)
}


export default Login;
