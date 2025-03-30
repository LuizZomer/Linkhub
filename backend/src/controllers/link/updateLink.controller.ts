import { Request, Response } from "express";
import { createLinkService } from "../../services/link/createLink.service";
import { User } from "@prisma/client";
import { DuplicateFieldError } from "../../utils/execeptions/duplicateFieldError.exception";
import { updateLinkService } from "../../services/link/updateLink.service";

export async function updateLink(req: Request, res: Response) {
  try {
    const link = await updateLinkService(req.body);

    res
      .status(201)
      .json({ message: "Link editado com sucesso!", content: link });
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
