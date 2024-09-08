"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const { env } = process;
const appConfig = {
    environment: env.NODE_ENV,
    port: env.PORT,
    mongoDbUri: env.MONGO_URI,
};
exports.default = appConfig;
