import {AxiosInstance, AxiosError} from 'axios';

export const initInterception = (
  axios: AxiosInstance,
  token?: string,
): void => {
  axios.interceptors.request.use(
    config => {
      if (config.headers) {
        config.headers['Content-Type'] =
          config.headers['Content-Type'] || 'application/json';
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.timeout = 10000;

      return config;
    },
    (error: AxiosError) => {
      console.error('Erro ao configurar a requisição:', error.message);
      return Promise.reject(error);
    },
  );
  axios.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        console.error('Erro na resposta da API:', {
          mensagem: error.response.data,
          url: error.response.config.url,
          status: error.response.status,
          headers: 'Redacted for security',
        });
      } else if (error.request) {
        console.error('Nenhuma resposta recebida:', error.request);
      } else {
        console.error('Erro na configuração da requisição:', error.message);
      }

      return Promise.reject(error);
    },
  );
};
