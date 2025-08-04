export class AuthApi {
  async login(params: LoginParams): Promise<any> {}
  async register(params: RegisterParams): Promise<any> {}
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
