"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const main_1 = __importDefault(require("./routes/main"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
server.use(main_1.default);
server.use((req, res) => {
    res.status(404);
    res.json({ status: false, error: "Endpoint not found." });
});
server.listen(8000);
