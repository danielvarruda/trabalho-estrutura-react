import { Request, Response } from "express";
import User from "../models/User"

export const listUsers = async (req: Request, res: Response) => {
    let users = await User.findAll();

    res.json({
        status: true,
        users
    });
}
