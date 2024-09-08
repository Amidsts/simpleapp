"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_1 = __importDefault(require("./controllers/signup"));
const signin_1 = __importDefault(require("./controllers/signin"));
const router = (0, express_1.Router)();
router.post("/signup", signup_1.default);
router.post("/signin", signin_1.default);
const authRouter = router;
exports.default = authRouter;
