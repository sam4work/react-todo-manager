type ISettings = {
	theme: string,
	lastPage?: string,
}
const setupLocalSorage = () => {

	let settings = localStorage.getItem("settings")

	if (!settings) {
		localStorage.setItem("settings", JSON.stringify(
			{
				theme: "light",
				lastPage: "/"
			}
		))
	}
}


const getSettings = () => {
	setupLocalSorage()
	const settings = localStorage.getItem("settings")

	if (settings !== null && settings !== "") {
		return JSON.parse(settings)
	}
	return {}
}

const updateSettings = (options: ISettings) => {

	localStorage.setItem("settings", JSON.stringify(
		{
			...getSettings(),
			...options
		}
	)
	)
}


const useStorage = () => { return { getSettings, updateSettings } }


export default useStorage