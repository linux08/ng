import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});
export default axiosInstance;
