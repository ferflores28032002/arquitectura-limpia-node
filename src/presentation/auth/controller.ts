import { Request, Response } from "express";

import { RegisterUserDto } from "../../domain";

export class AuthController {
  // todo: DI
  constructor() {}

  registerUser = async (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    res.json(registerUserDto);
  };

  loginUser = async (req: Request, res: Response) => {
    res.json("login");
  };
}
