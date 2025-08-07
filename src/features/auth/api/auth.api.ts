export class AuthApi {
  async login(params: LoginParams): Promise<any> {
    console.log("params : ", params)
  }
  async register(params: RegisterParams): Promise<any> {
    console.log("params : ", params)
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
