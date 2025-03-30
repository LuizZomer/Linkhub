import { Request, Response } from "express";
import { UserOrPasswordNotFoundError } from "../../utils/execeptions/user/userNotFound.exception";
import { loginService } from "../../services/auth/login.service";

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;

    const token = await loginService({ password, username });

    res.status(200).json({ accessToken: token });
  } catch (e) {
    if (e instanceof UserOrPasswordNotFoundError) {
      res.status(e.statusCode).json({ message: e.message });
    }
  }
}
