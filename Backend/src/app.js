import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./routers/product";
import categoryRouter from "./routers/category";
import authRouter from "./routers/auth";

const app = express();
// middleware
app.use(express.json());
app.use(cors());
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
// server
mongoose.connect("mongodb://127.0.0.1:27017/we17307");
export const viteNodeApp = app;
