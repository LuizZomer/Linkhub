import { Request, Response } from "express";
import { createLinkService } from "../../services/link/createLink.service";
import { NoFoundData } from "../../utils/execeptions/NoFoundData.exception";
import { deleteLinkService } from "../../services/link/deleteLink.service";

export async function deleteLink(req: Request, res: Response) {
  try {
    const { id } = req.params as { id: string };
    const link = await deleteLinkService(Number(id));

    res
      .status(200)
      .json({ message: "Link deletado com sucesso!", content: link });
  } catch (e) {
    if (e instanceof NoFoundData) {
      res.status(e.statusCode).json({
        error: { message: e.message },
      });
      return;
    }
    res.status(500).json({ error: "Erro interno no servidor" });
  }
}
