import {Router} from "express";
import * as UserController from "../controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
    res.json({ msg: "Api ruetter.com" });
});

routes.get("/users", UserController.listUsers);

export default routes;
