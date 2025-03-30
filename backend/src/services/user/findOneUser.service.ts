import { UserRepository } from "../../repository/user.repository";

const userRepository = new UserRepository();

export async function findOneUserService(username: string) {
  return userRepository.findOne(username);
}
