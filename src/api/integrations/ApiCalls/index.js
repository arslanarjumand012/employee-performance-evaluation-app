import axios from 'axios';

export const callEndpoint = async (url, method, data, token, header) => {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      audience: window.location.origin
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    if (header) {
      headers['Content-Type'] = header;
    } else {
      headers['Content-Type'] = 'application/json';
    }

    const res = await axios({
      url: url,
      method: method,
      data: data,
      headers: headers
    });

    if (res.data?.pagination) {
      return {
        data: res.data.data,
        message: res.data.isError ? res.data.error.exceptionMessage : res.data.message,
        statusCode: res.data.statusCode,
        pagination: res.data?.pagination
      };
    }

    return {
      data: res.data.data,
      message: res.data.isError ? res.data.error.exceptionMessage : res.data.message,
      statusCode: res.data.statusCode
    };
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.isError,
        message: error.response.data.isError
          ? error.response.data.error.exceptionMessage
          : error.response.data.message,
        statusCode: error.response.status
      };
    }
  }
};

export const callDelete = async (url, data, token) => {
  return callEndpoint(url, 'delete', data, token);
};

export const callGet = async (url, token) => {
  return callEndpoint(url, 'get', {}, token);
};

export const callPost = async (url, data, token, header) => {
  return callEndpoint(url, 'post', data, token, header);
};

export const callPut = async (url, data, token) => {
  return callEndpoint(url, 'put', data, token);
};
