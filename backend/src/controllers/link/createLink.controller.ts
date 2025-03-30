import { Request, Response } from "express";
import { createLinkService } from "../../services/link/createLink.service";
import { User } from "@prisma/client";
import { DuplicateFieldError } from "../../utils/execeptions/duplicateFieldError.exception";

export async function createLink(req: Request, res: Response) {
  try {
    const user = req.user as User;

    const link = await createLinkService(req.body, user.id);

    res
      .status(201)
      .json({ message: "Link criado com sucesso!", content: link });
  } catch (e) {
    if (e instanceof DuplicateFieldError) {
      res.status(e.statusCode).json({
        error: { message: e.message },
      });
      return;
    }
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}
