import { CreateLinkDTO } from "../../dto/link/CreateLink.dto";
import { UpdateLinkDTO } from "../../dto/link/UpdateLink.dto";
import { linkCreateMapper } from "../../mappers/linkCreate.mapper";
import { LinkRepository } from "../../repository/link.repository";

const linkRepository = new LinkRepository();

export async function updateLinkService(data: UpdateLinkDTO) {
  await linkRepository.checkDuplicateField("url", data.url, true);
  await linkRepository.noFoundLink(data.id);

  const newLink = await linkRepository.update(data);

  return linkCreateMapper(newLink);
}
