import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

import connectToMongoDB from "./db/connectToMongoDB.js"
import {app, server} from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());  // to parse the incoming requests with JSON payloads (from req.body) 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is listning at port ${PORT}`);
}) 