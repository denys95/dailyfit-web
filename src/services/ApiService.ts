import { BaseService } from '../services';

const API_URL = process.env.API_URL;

class ApiService extends BaseService {

  /**
   * POST /api/auth/login
   * Login to system
   */
  public login(request): Promise<any> {
    const url = `http://www.mocky.io/v2/5da9c55631000036021e0bb9`;
    return this.authorizedRequest(url, {
      method: 'GET',
      data: request,
    });
  }

  /**
   * POST /api/auth/logout
   * Logout from system
   */
  public async logout(): Promise<number> {
    const url = `${API_URL}/api/auth/logout`;
    const res = await this.authorizedRequest(url, {
      method: 'POST',
    });
    return res.status;
  }
}

export const apiService = new ApiService();
