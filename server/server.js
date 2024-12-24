import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoute from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

//create an express app instance
const app = express();
//choose a port to run our express app
const port = process.env.PORT || 4000;
connectDB();

//all the request will be passed using json
app.use(express.json());
app.use(cookieParser());
//now we can send the cookies in the response, from the express app.
app.use(cors({ credentials: true }));

//Api End Points
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);
app.listen(port, () => console.log(`Server is runng on PORT:${port}`));
