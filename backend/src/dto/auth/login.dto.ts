import { IsString } from "class-validator";

export class LoginDTO {
  @IsString({ message: "Campo Nome de usuário é obrigatório" })
  username: string;

  @IsString({ message: "Campo senha é obrigatório" })
  password: string;
}
