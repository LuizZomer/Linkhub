import { User } from "@prisma/client";
import { TCreateUserOutput } from "../types/user/createUserOutput.type";

export function userCreateMapper(data: User): TCreateUserOutput {
  return {
    email: data.email,
    username: data.username,
  };
}
