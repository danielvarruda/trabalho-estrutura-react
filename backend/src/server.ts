import express from "express";
import cors from "cors";

import mainRoutes from "./routes/main";

const server = express();

server.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

server.use(mainRoutes);

server.use((req, res) => {
    res.status(404);
    res.json({ status: false, error: "Endpoint not found." });
});

server.listen(8000);