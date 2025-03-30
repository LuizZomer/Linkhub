import { LoginDTO } from "../../dto/auth/login.dto";
import { findOneUserService } from "../../services/user/findOneUser.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserOrPasswordNotFoundError } from "../../utils/execeptions/user/userNotFound.exception";

export async function loginService({ password, username }: LoginDTO) {
  const user = await findOneUserService(username);

  if (!user) {
    throw new UserOrPasswordNotFoundError();
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new UserOrPasswordNotFoundError();
  }

  const payload = { username: user.username, id: user.id };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
}
