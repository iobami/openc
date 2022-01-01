import { ajax } from 'storejars-react-toolkit/dist/operators';

export function handleSuccess(response: { data: any }, defaultValue = {}) {
  try {
    return response?.data || defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

export function handleErrors({ response }: any) {
  if (!response) return 'service unavailable';

  const { errors, message } = response;

  let errorMessage: string = message || 'service unavailable';

  if (!errors) return errorMessage;

  try {
    Object.entries(errors).forEach(([, error]: any) => {
      [errorMessage] = error;
    });

    return errorMessage;
  } catch (error) {
    return errorMessage;
  }
}

const API_BASE_URL = '/api';

const get = (url: string) => ajax({
  url: `${API_BASE_URL}${url}`,
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const api = {
  get,
};
