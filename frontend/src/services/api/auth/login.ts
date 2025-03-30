import type { ILogin } from "../../../types/auth/login";
import { api } from "../api";

export const login = async (data: ILogin): Promise<{ accessToken: string }> => {
  const res = await api.post("/auth/login", data);
  console.log(res.data);

  return res.data;
};
