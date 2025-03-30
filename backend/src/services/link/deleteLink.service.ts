import { linkCreateMapper } from "../../mappers/linkCreate.mapper";
import { LinkRepository } from "../../repository/link.repository";

const linkRepository = new LinkRepository();

export async function deleteLinkService(id: number) {
  await linkRepository.noFoundLink(id);

  const deletedLink = await linkRepository.delete(id);

  return linkCreateMapper(deletedLink);
}
