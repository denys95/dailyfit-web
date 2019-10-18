/** @prettier */
import axios, { AxiosResponse } from 'axios';

interface ApiOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: {};
  headers?: {
    'Content-Type': string;
  },
  params?: string;
}

export abstract class BaseService {
  protected readonly headers = {
    'Content-Type': 'application/json',
  };

  public async authorizedRequest(
    url: string,
    options: ApiOptions,
  ): Promise<AxiosResponse> {
    return axios(url, {
      ...options,
      withCredentials: true,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });
  }
}
