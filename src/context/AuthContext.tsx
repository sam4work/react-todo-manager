import React, { useState, createContext, useContext, useEffect } from 'react'
import apiClient from "../lib/axiosApiClient"
import { AxiosError, isAxiosError } from "axios"
import { useNavigate } from "react-router-dom"


interface ContextChildren {
	children?: React.ReactNode
}

interface UserAuthDataInterface {
	name? : string,
	email : string,
	password : string,
	password_confirmation? : string
}

interface UserAuthInterface {
	name : string,
	email : string,
	first_name? : string,
	last_name? : string
}
const AuthContext = createContext({})


export const AuthProvider: React.FC<ContextChildren> = ({children}) => {

	const [errors,setErrors] = useState()
	// const [errorStatus,setErrorStatus] = useState()
	const [user,setUser] = useState<UserAuthInterface | null>(null)

	const csrf = () => apiClient.get('/sanctum-csrf')

	const register = async (userAuthData : UserAuthDataInterface) => {

		const navigate = useNavigate()
		
		try{
			await csrf()

			const registerReponse = await apiClient.post("/api/register",userAuthData)

			console.log(registerReponse)

			if(registerReponse.status === 201){
				navigate("/login")
			}

		}catch(e){

			if(isAxiosError(e)){
				const error = e as AxiosError

				console.log(error)
				// setErrors(error.response?.data)
				// setErrorStatus(error.response?.status)
			}

		}
	}
	
const getUser = async () => {
	await csrf()
return await apiClient.get("/api/user")
}

useEffect(() => {
getUser()
},[user,errors])

	return (
		<AuthContext.Provider value={{user,getUser,register}}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthProvider



