import { prisma } from "../config/prisma.config";
import { CreateUserDTO } from "../dto/user/CreateUser.dto";
import { DuplicateFieldError } from "../utils/execeptions/duplicateFieldError.exception";

export class UserRepository {
  async create(data: CreateUserDTO) {
    return prisma.user.create({ data });
  }

  async findOne(username: string) {
    return prisma.user.findUnique({ where: { username } });
  }

  async checkDuplicateField(key: "username" | "email", value: string) {
    const count = await prisma.user.count({
      where: {
        [key]: value,
      },
    });

    if (count > 0) {
      throw new DuplicateFieldError(key, value);
    }
  }
}
