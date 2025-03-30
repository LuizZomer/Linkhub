export class UserOrPasswordNotFoundError extends Error {
  public readonly statusCode: number;

  constructor() {
    super("Nome de usuário e/ou senha incorreta");
    this.name = "UserNotFoundError";
    this.statusCode = 400;
  }
}
