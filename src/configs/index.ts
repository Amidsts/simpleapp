import "dotenv/config";

const { env } = process;

const appConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
  mongoDbUri: env.MONGO_URI,
};

export default appConfig;
