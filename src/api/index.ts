import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const baseInstance = axios.create({
	baseURL,
});

baseInstance.interceptors.response.use((res) => {
	res.data = res.data.data;

	return res;
});

export default baseInstance;
