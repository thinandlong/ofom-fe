import axios from 'axios';

interface ApiError {
	status: number;
	errorCode: string;
	errors: [];
	reason: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const baseInstance = axios.create({
	baseURL,
});

baseInstance.interceptors.response.use(
	(res) => res.data,
	async (err) => {
		const { response } = err;
		const {
			status,
			data: { errorCode, errors, reason },
		} = response;

		const formatError: ApiError = {
			status,
			errorCode,
			errors,
			reason,
		};

		return Promise.reject(formatError);
	},
);

export default baseInstance;
