import { IsInt } from "class-validator";
import { CreateLinkDTO } from "./CreateLink.dto";

export class UpdateLinkDTO extends CreateLinkDTO {
  @IsInt()
  id: number;
}
