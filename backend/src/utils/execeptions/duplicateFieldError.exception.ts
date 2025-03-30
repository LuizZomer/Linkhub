export class DuplicateFieldError extends Error {
  public readonly statusCode: number;

  constructor(field: string, value: string) {
    super(`${field} '${value}' já está cadastrado!`);
    this.name = "DuplicateFieldError";
    this.statusCode = 400;
  }
}
