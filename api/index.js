import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is Connected!"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
