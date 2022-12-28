import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import studentRouter from "./routes/student.js";
import dotenv from "dotenv";

mongoose.set('strictQuery', false);

const app = express();
dotenv.config();

app.use(morgan("start"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Initial Routes
app.use("/users", userRouter); // http:localhost:8080/users/signup
app.use("/student", studentRouter);
app.get("/", (req, res) => {
  res.send("Welcome to student API");
})

let port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
