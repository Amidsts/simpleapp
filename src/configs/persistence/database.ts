import mongoose, { ConnectOptions } from "mongoose";
import appConfig from "..";

export async function connectMongoDb(): Promise<void> {
  const options = {
    family: 4,
  } as ConnectOptions;

  try {
    await mongoose.connect(appConfig.mongoDbUri, options);
  } catch (error) {
    console.log("Error connecting to database:" + "error", error);
    process.exit(1);
  }

  // Listen for errors after the initial connection
  mongoose.connection.on("error", (error) => {
    console.log("Database error:" + error, "error");
  });
}
