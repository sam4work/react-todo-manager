import useSWR, { mutate } from 'swr'
import apiClient from "../lib/axiosApiClient"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { AxiosError, isAxiosError } from "axios"


interface AuthPropsInterface {
	middleware: string,
	redirectIfAuthenticated: string
}

interface UserAuthDataInterface {
	name?: string,
	email: string,
	password: string,
	password_confirmation?: string
}

const useAuth = ({ middleware, redirectIfAuthenticated }: AuthPropsInterface) => {

	const navigate = useNavigate()

	const { data: user, error, mutate } = useSWR("/api/user", () => {
		apiClient.get("/api/user").then(response => response.data)
			.catch(error => {
				if (error.response.status !== 409) throw error
				navigate("/verify-email")
			})
	})

	const csrf = () => apiClient.get("sanctum/csrf-cookie")

	const register = async (userData: UserAuthDataInterface) => {

		await csrf()

		try {

			const registerResponse = await apiClient.post("/api/register", userData)

			// if (registerResponse.status === 204) navigate("/dashboard")
			mutate()

		} catch (e) {

			if (!isAxiosError(e)) throw new Error("Unable to match api request")

			const axiosError = e as AxiosError
			error.status = axiosError.status



			console.error(axiosError)
		}


	}

	const login = async (userData: UserAuthDataInterface) => {

		await csrf()

		try {

			const loginResponse = await apiClient.post("/api/login", userData)

			if (loginResponse.status === 204) {

				// navigate("/dashboard")
				document.cookie = loginResponse.data.access_token
				mutate()
			}

		} catch (e) {

			if (!isAxiosError(e)) throw new Error("Unable to match api request")

			const axiosError = e as AxiosError
			error.status = axiosError.status

			console.error(axiosError)
		}


	}

	const logout = async () => {

		await csrf()

		try {

			const loginResponse = await apiClient.post("/api/logout")

			// if (loginResponse.status === 204) navigate("/dashboard")
			mutate()

		} catch (e) {

			if (!isAxiosError(e)) throw new Error("Unable to match api request")

			const axiosError = e as AxiosError
			error.status = axiosError.status

			console.error(axiosError)
		}


	}




	useEffect(() => {

		if (middleware === "guest" && redirectIfAuthenticated && user) {
			navigate(redirectIfAuthenticated)
		}

	}, [user, error])


	return {
		user,
		error,
		register,
		login,
		logout

	}




}

export default useAuth


// export const useAuth = ({ middleware , redirectIfAuthenticated }) => {
// 	// const router = useRouter()

// 	const navigator = useNavigate()

// 	const { data: user, error, mutate } = useSWR('http://localhost:8000/api/user', () =>
// 		apiClient
// 			.get('/api/user')
// 			.then(res => res.data)
// 			.catch(error => {
// 				if (error.response.status !== 409) throw error

// 				navigator("/dashboard")
// 			}),
// 	)

// 	const csrf = () => apiClient.get('/sanctum/csrf-cookie')

// 	const register = async ({ setErrors: [{ }], ...props }) => {
// 		await csrf()

// 		setErrors([])

// 		apiClient
// 			.post('/register', props)
// 			.then(() => mutate())
// 			.catch(error => {
// 				if (error.response.status !== 422) throw error

// 				setErrors(error.response.data.errors)
// 			})
// 	}

// 	const login = async ({ setErrors, setStatus, ...props }) => {
// 		await csrf()

// 		setErrors([])
// 		setStatus(null)

// 		apiClient
// 			.post('/login', props)
// 			.then(() => mutate())
// 			.catch(error => {
// 				if (error.response.status !== 422) throw error

// 				setErrors(error.response.data.errors)
// 			})
// 	}



// 	const logout = async () => {
// 		if (!error) {
// 			await apiClient.post('/logout').then(() => mutate())
// 		}

// 		window.location.pathname = '/login'
// 	}

// 	useEffect(() => {
// 		if (middleware === 'guest' && redirectIfAuthenticated && user)
// 			navigator(redirectIfAuthenticated)
// 		if (
// 			window.location.pathname === '/verify-email' &&
// 			user?.email_verified_at
// 		)
// 			navigator(redirectIfAuthenticated)
// 		if (middleware === 'auth' && error) logout()
// 	}, [user, error])

// 	return {
// 		user,
// 		register,
// 		login,
// 		logout,
// 	}
// }
