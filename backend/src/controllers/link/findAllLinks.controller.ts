import { User } from "@prisma/client";
import { Request, Response } from "express";
import { findAllLinksServices } from "../../services/link/findAllLinks.service";

export async function findAllLinks(req: Request, res: Response) {
  const user = req.user as User;
  const { page, take, search } = req.query as {
    page: string;
    take: string;
    search: string;
  };

  if (!Number(page) || !Number(take)) {
    res
      .status(400)
      .json({ message: "Os params page e take devem ser numeros" });
    return;
  }

  const links = await findAllLinksServices(
    Number(page),
    Number(take),
    search,
    user.id
  );

  res.status(201).json({ content: links });
}
