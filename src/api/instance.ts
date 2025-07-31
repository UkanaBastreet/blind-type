import axios, { AxiosInstance } from "axios";

export class InstanceApi {
  instance: AxiosInstance | null = null;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }
}
