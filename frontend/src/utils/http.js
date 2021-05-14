import axios from 'axios';
import { stringify } from 'qs';
import config from "../config.json";

function initUrl() {
  return `http://${config.services.backend.hostname}:${config.services.backend.port}`;
}

class HttpInstance {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url || initUrl(),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      },
      paramsSerializer: (params) => stringify(params, { indices: false })
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get(url, options = {}) {
    let result;

    try {
      result = await this.instance.get(url, options);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(url, error);
    }

    return result && result.data;
  }

  async post(url, body, options = {}) {
    let result;

    try {
      result = await this.instance.post(url, body, options);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(url, error);
      throw (error.response);
    }

    return result && result.data;
  }

  async put(url, body, options = {}) {
    let result;

    try {
      result = await this.instance.put(url, body, options);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(url, error);
      throw (error.response);
    }

    return result && result.data;
  }

  async patch(url, body, options = {}) {
    let result;

    try {
      result = await this.instance.patch(url, body, options);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(url, error);
    }

    return result && result.data;
  }

  async delete(url, options = {}) {
    let result;

    try {
      result = await this.instance.delete(url, options);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(url, error);
    }

    return result && result.data;
  }
}

export default HttpInstance;