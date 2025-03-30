import type { JwtPayload } from "jwt-decode";

export interface ILogin {
  username: string;
  password: string;
}

export interface IUserDecoded extends JwtPayload {
  id: number;
  username: string;
}
