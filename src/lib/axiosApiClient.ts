import Axios from 'axios';

const apiClient = Axios.create({
	baseURL: 'http://localhost:8000',
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		"Accept": "application/json",
	},
	withCredentials: true,
});

export default apiClient;
