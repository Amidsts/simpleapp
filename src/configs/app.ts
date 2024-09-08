import cors from "cors";
import express, { Application, NextFunction, Response, Request } from "express";
import helmet from "helmet";

import { handleResponse } from "../utils/response";
import authRouter from "../auth/auth.routes";
const app: Application = express();

// export const initializeDatabase= async () => {};

export const initializeMiddlewares = () => {
  app
    .use(express.json({ limit: "50kb" }))
    .use(express.urlencoded({ limit: "50kb", extended: false }))
    .use(helmet())
    .use((err: any, req: Request, res: Response, next: NextFunction) => {
      if (req.method === "OPTIONS") {
        res.header(
          "Access-Control-Allow-Methods",
          "POST, PUT, PATCH, GET, DELETE"
        );
        return handleResponse({
          res,
          status: 403,
          message: "Invalid header method",
        });
      }

      if (req.body && err instanceof SyntaxError) {
        return res.status(400).json({
          message: "Malformed JSON, check the body of the request",
        });
      }

      return next();
    });
};

export const initializeRoutes = () => {
  app.get("/", (_req, res) => {
    res.json({ message: "Test from a docker file" });
  });

  app.use("/auth", authRouter);

  app.all("*", (_req, res: Response) =>
    handleResponse({
      res,
      status: 404,
      message: "You have used an invalid method or hit an invalid route",
    })
  );

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message);
  });
};

export default app;
