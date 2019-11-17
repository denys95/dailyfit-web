import { BaseService } from '../services';
import { Country } from '../models';

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
    const url = `http://www.mocky.io/v2/5dc5645b3200008000769a0d`;
    return this.authorizedRequest(url, {
      method: 'GET',
    });
  }

  /**
   * GET /api/dictionary/countries
   * Get countries list
   */
  public getCountries(): Promise<any> {
    const url = `http://www.mocky.io/v2/5db88af33b0000eaa535f1e4`;
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
