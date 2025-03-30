import { CreateUserDTO } from "../../dto/user/CreateUser.dto";
import { userCreateMapper } from "../../mappers/userCreate.mapper";
import { UserRepository } from "../../repository/user.repository";
import * as bcrypt from "bcrypt";

const userRepository = new UserRepository();

export async function createUserService(data: CreateUserDTO) {
  await userRepository.checkDuplicateField("email", data.email);
  await userRepository.checkDuplicateField("username", data.username);

  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
  const newUser = await userRepository.create(data);

  return userCreateMapper(newUser);
}
