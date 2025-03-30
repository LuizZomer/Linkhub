import { CreateLinkDTO } from "../../dto/link/CreateLink.dto";
import { linkCreateMapper } from "../../mappers/linkCreate.mapper";
import { LinkRepository } from "../../repository/link.repository";

const linkRepository = new LinkRepository();

export async function createLinkService(data: CreateLinkDTO, userId: number) {
  await linkRepository.checkDuplicateField("url", data.url);

  const newLink = await linkRepository.createLink(data, userId);

  return linkCreateMapper(newLink);
}
