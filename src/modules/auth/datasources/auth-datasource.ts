import { AuthModel } from "../models";

export abstract class AuthDatasource {
  abstract login<T>(payload: AuthModel): Promise<T>;
  abstract sign<T>(payload: AuthModel): Promise<T>;
}