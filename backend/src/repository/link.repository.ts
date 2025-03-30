import { prisma } from "../config/prisma.config";
import { CreateLinkDTO } from "../dto/link/CreateLink.dto";
import { UpdateLinkDTO } from "../dto/link/UpdateLink.dto";
import { DuplicateFieldError } from "../utils/execeptions/duplicateFieldError.exception";
import { NoFoundData } from "../utils/execeptions/NoFoundData.exception";

export class LinkRepository {
  async createLink(data: CreateLinkDTO, userId: number) {
    return prisma.link.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async listAll({
    page,
    search,
    take,
    userId,
  }: {
    take: number;
    page: number;
    search: string;
    userId: number;
  }) {
    const [items, total] = await Promise.all([
      prisma.link.findMany({
        take,
        skip: (page - 1) * take,
        where: {
          title: { contains: search },
          userId,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.link.count(),
    ]);

    return { items, totalPages: Math.ceil(total / take) };
  }

  async update({ category, id, title, url }: UpdateLinkDTO) {
    return prisma.link.update({
      data: { category, title, url },
      where: { id },
    });
  }

  async delete(id: number) {
    return prisma.link.delete({
      where: {
        id,
      },
    });
  }

  async noFoundLink(id: number) {
    const count = await prisma.link.count({ where: { id } });

    if (count === 0) {
      throw new NoFoundData("Link não encontrado!");
    }
  }

  async checkDuplicateField(key: "url", value: string, isUpdate?: boolean) {
    const count = await prisma.link.count({
      where: {
        [key]: value,
      },
    });

    if (isUpdate && count > 1) {
      throw new DuplicateFieldError(key, value);
    }

    if (!isUpdate && count > 0) {
      throw new DuplicateFieldError(key, value);
    }
  }
}
