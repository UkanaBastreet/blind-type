import { InstanceApi } from "./instance";

export class AuthApi extends InstanceApi {
  async login(params: LoginParams): Promise<any> {
    if (this.instance) {
      const res = (await this.instance.post("/auth/login", params)).data;
      return res;
    }
  }
  async register(params: RegisterParams): Promise<any> {
    if (this.instance) {
      const res = (await this.instance.post("/auth/register", params)).data;
      return res;
    }
  }
}

export interface LoginParams {
  email: string;
  password: string;
}
export interface RegisterParams {
  email: string;
  username: string;
  password: string;
}
export interface AuthResponse {}
