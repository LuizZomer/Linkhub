import type { TLink } from "../../../schemas/link";
import { api } from "../api";

export const createLink = async (data: TLink) => {
  const res = await api.post("/link", data);

  return res.data;
};
