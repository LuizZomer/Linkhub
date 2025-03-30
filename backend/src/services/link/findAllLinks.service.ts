import { LinkRepository } from "../../repository/link.repository";

const linkRepository = new LinkRepository();

export async function findAllLinksServices(
  page: number,
  take: number,
  search: string,
  userId: number
) {
  return linkRepository.listAll({ page, search, take, userId });
}
