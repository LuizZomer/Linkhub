import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsNotEmpty,
} from "class-validator";

export class CreateUserDTO {
  @IsString({ message: "Campo Nome de usuário é obrigatório" })
  username: string;

  @IsNotEmpty({ message: "Campo de email é obrigatório" })
  @IsString({ message: "Campo de email é obrigatório" })
  @IsEmail({}, { message: "Precisa ser um email valido!" })
  email: string;

  @IsString({ message: "Campo de senha é obrigatório" })
  @IsStrongPassword(
    {
      minLength: 6,
      minLowercase: 0,
      minNumbers: 1,
      minUppercase: 1,
      minSymbols: 0,
    },
    { message: "A senha não esta forte o suficiente" }
  )
  password: string;
}
