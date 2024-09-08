"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = void 0;
const handleResponse = ({ res, data, status = 200, err, message, }) => {
    if (err)
        console.log("Error  ", err);
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
exports.handleResponse = handleResponse;
