import { BaseService } from '../services';

const API_URL = process.env.API_URL;

class ApiService extends BaseService {

  private static instance: ApiService;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * GET /api/user/:id
   * Get user info
   */
  public getUser(): Promise<any> {
    const url = `http://www.mocky.io/v2/5dad97fc2d0000a542e4bb35`;
    return this.authorizedRequest(url, {
      method: 'GET',
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

export const apiService = ApiService.getInstance();
