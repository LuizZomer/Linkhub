import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validateDTO<T extends object>(dtoClass: { new (): T }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);

    const error = await validate(dtoObject);

    if (error.length > 0) {
      const especificError = error[0].constraints;

      res
        .status(400)
        .json({ message: especificError[Object.keys(especificError)[0]] });
    }

    next();
  };
}
