import { CustomInstance } from '../types';

const commonInterceptor = (instance: CustomInstance) => {
  instance.interceptors.request.use((config) => {
    if (!config.headers) return config;

    const token = localStorage.getItem('token');

    if (token !== null) {
      config.headers['x-ofom-auth-token'] = token;
    }

    return config;
  });

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
