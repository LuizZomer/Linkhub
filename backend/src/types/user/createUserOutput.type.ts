import { User } from "@prisma/client";

export type TCreateUserOutput = Omit<User, "id" | "links" | "password">;
