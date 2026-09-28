import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";
import userRouter from "./routes/userRoutes.js"
import {propertyRouter} from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js";


dotenv.config();

const app = express();

// Enable CORS
app.use(cors({ origin: true, credentials: true }));

// Express JSON body parser
app.use(express.json({ limit: "100mb" }));

// URL-encoded body parser
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// Cookie Parser
app.use(cookieParser());

// Base Route / API Endpoints (Added from Day 6 Session)
app.use("/api/v1/rent/user", userRouter);
app.use("/api/v1/rent/listing",propertyRouter);
app.use("/api/v1/rent/user/booking",bookingRouter);
// Test route
app.get("/", (req, res) => {
  res.send("Homelyhub server is running");
});

const PORT = process.env.PORT || 8080;


// Connect Database & Start Server
connectDB();

app.listen(PORT, () => {
  console.log(`App is running on port no: ${PORT}`);
});