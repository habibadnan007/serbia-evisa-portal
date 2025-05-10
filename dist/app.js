"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const errHandler_1 = require("./app/middleware/errHandler");
const visa_route_1 = require("./app/module/visa/visa.route");
const http_status_codes_1 = require("http-status-codes");
//   15 minute
//   */15 * * * *
// Self-ping task
// cron.schedule("*/10 * * * *", () => {
//   // axios.get(`https://serbia-evisa-portal-server.onrender.com`)
//   // .get(`https://serbia-evisa-portal-server-pivh.onrender.com`) //TODO
//   axios
//     .get(`https://serbia-evisa-portal.onrender.com`) //TODO
//     .then((response) => console.log("Self-ping successful:", response.status))
//     .catch((error) => console.error("Self-ping failed:", error.message));
// });
const app = (0, express_1.default)();
// Parser
app.get("/", (req, res) => res.send({
    success: true,
    status: http_status_codes_1.StatusCodes.OK,
    message: "Serbia e visa server is running!",
    data: null,
}));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Router
app.use("/api/v1/visa", visa_route_1.visaRouter);
// Err handler
app.use(errHandler_1.notFoundErrHandler);
app.use(errHandler_1.globalErrHandler);
exports.default = app;
