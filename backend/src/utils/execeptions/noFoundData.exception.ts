export class NoFoundData extends Error {
  public readonly statusCode: number;

  constructor(context: string) {
    super(context);
    this.name = "NoFoundData";
    this.statusCode = 400;
  }
}
