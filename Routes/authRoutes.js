import express from "express";
import { registerUser } from "../Controllers/authControllers.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

export default authRoutes;
