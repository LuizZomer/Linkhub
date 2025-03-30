import { IsString } from "class-validator";

export class CreateLinkDTO {
  @IsString({ message: "O nome do link é obrigatório" })
  title: string;

  @IsString({ message: "A url é obrigatória" })
  url: string;

  @IsString({ message: "A categoria é obrigatória" })
  category: string;
}
