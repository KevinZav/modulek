import axios from "axios";

export class AxiosConnection {

  public static connect(baseURL: string, token?: string, bearer: boolean = true) {
    const connection = axios.create({
      baseURL
    });

    connection.interceptors.request.use((config) => {
      if (token) {
        const tokenString = bearer ? `Bearer ${token}` : token;
        config.headers.Authorization = tokenString;
      }

      return config;
    });
    return connection;
  }
}