"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRoutes = exports.initializeMiddlewares = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const response_1 = require("../utils/response");
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const app = (0, express_1.default)();
// export const initializeDatabase= async () => {};
const initializeMiddlewares = () => {
    app
        .use(express_1.default.json({ limit: "50kb" }))
        .use(express_1.default.urlencoded({ limit: "50kb", extended: false }))
        .use((0, helmet_1.default)())
        .use((err, req, res, next) => {
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
            return (0, response_1.handleResponse)({
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
exports.initializeMiddlewares = initializeMiddlewares;
const initializeRoutes = () => {
    app.get("/", (_req, res) => {
        res.json({ message: "Test from a docker file" });
    });
    app.use("/auth", auth_routes_1.default);
    app.all("*", (_req, res) => (0, response_1.handleResponse)({
        res,
        status: 404,
        message: "You have used an invalid method or hit an invalid route",
    }));
    app.use((err, _req, res, next) => {
        res.status(400).send(err.message);
    });
};
exports.initializeRoutes = initializeRoutes;
exports.default = app;
