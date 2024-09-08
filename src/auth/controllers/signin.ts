import { NextFunction, Request, Response, Router } from "express";
import UserModel from "../auth.model";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      throw Error("Bad credentials");
    }

    if (existingUser.password !== password) {
      throw Error("Bad credentials");
    }

    res
      .status(200)
      .send({ message: "login successfull", userProfile: existingUser });
  } catch (error: any) {
    next(error);
  }
};

export default signIn;
