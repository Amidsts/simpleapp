"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importStar(require("./configs/app"));
const configs_1 = __importDefault(require("./configs"));
const { port, environment } = configs_1.default;
(() => {
    (0, app_1.initializeMiddlewares)();
    (0, app_1.initializeRoutes)();
    app_1.default.listen(5000, () => {
        // console.log("Database connected");
        console.log(`${environment === null || environment === void 0 ? void 0 : environment.toLocaleUpperCase()} is now running on port 5000...`);
    });
    // connectMongoDb()
    //   .then(async () => {
    //console.log("Database connected");
    //     app.listen(port, () => {
    //
    //       console.log(
    //         `${environment?.toLocaleUpperCase()} is running on port ${port}...`
    //       );
    //     });
    //   })
    //   .catch((err: any) => console.log(err, "error"));
})();
