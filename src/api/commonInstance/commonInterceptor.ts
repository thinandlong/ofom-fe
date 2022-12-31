import { CustomInstance } from '../types';

const commonInterceptor = (instance: CustomInstance) => {
	instance.interceptors.response.use(
		(res) => res.data.data,
		({ response }) => {
			const { errorCode, errors, reason } = response.data;
			const result = {
				status: response.status,
				errorCode,
				errors,
				reason,
			};
			return Promise.reject(result);
		},
	);
};
export default commonInterceptor;
