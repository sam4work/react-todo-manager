import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

interface IThemeContext {
	dark: boolean;
	toggleDark: () => void;
}
interface ISettings {
	theme: string,
	lastPage: string,
}

interface IContextChildren {
	children?: React.ReactNode
}

const DEFAULT_STATE = {
	dark: false,
	toggleDark : () => {}
};

const ThemeContext = createContext<IThemeContext>(DEFAULT_STATE);


const ThemeProvider : React.FC<IContextChildren> = ({children}) => {

	const {getSettings,updateSettings} = useStorage()
	const [dark, setDark] = useState(getSettings().theme === "dark" ? true : false);
	const documentRoot = window.document.documentElement

	
	const toggleDark = () => {    
		setDark(!dark);  
		
	};
	
	
	useEffect(() => {
		
		//Todo : Fix types fo settings	
		
		updateSettings({"theme" : dark ? "dark" : "light"})
		
		if(dark){
		documentRoot.classList.add("dark")
		documentRoot.classList.remove("light")
		}else{
			documentRoot.classList.add("light")
			documentRoot.classList.remove("dark")
		}

		return () => {}
	},[dark])



	return (
		<>
		<ThemeContext.Provider value={{dark,toggleDark}}>
		{children}
		</ThemeContext.Provider>
		</>
	)
}


export default ThemeProvider


export const  useThemeContext =  () => useContext(ThemeContext)