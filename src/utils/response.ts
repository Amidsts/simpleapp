import { Response } from "express";

export type handleResponseArgType = {
  res: Response;
  data?: any;
  status?: number;
  err?: any;
  message?: string;
};


export const handleResponse = ({
  res,
  data,
  status = 200,
  err,
  message,
}: handleResponseArgType): Response => {
  if (err) console.log("Error  ", err);

  if (status >= 400) {
    if (err && err.name && err.name === "MongoError") {
      if (err.code === 11000)
        return res.status(400).json({
          message: "duplicate detected",
        });
    }
  }

  return res.status(status).json({
    message,
    data,
  });
};

