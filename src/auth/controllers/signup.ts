import { NextFunction, Request, Response, Router } from "express";
import UserModel from "../auth.model";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email in use");
    }

    const user = await new UserModel({ email, password }).save();

    res.status(201).send(user);
  } catch (error: any) {
    next(error);
  }
};

export default signUp;
