import { Request, Response } from "express";

export async function teste(req: Request, res: Response) {
  console.log(req.user);

  res.status(200).json({ message: "Deu bom" });
}
