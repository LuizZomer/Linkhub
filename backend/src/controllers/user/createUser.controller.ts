import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";
import { CreateUserDTO } from "../../dto/user/CreateUser.dto";
import { DuplicateFieldError } from "../../utils/execeptions/duplicateFieldError.exception";

export async function createUser(
  req: Request<{}, {}, CreateUserDTO>,
  res: Response
) {
  try {
    const user = await createUserService(req.body);

    res.status(201).json({ message: "Criado com sucesso!", content: user });
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
