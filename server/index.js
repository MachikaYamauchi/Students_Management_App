import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

mongoose.set('strictQuery', false);

// AVx.FXwE.2JHmHa
// mongodb+srv://machika:<password>@cluster0.cs1mij3.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(morgan("start"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Initial Routes
app.use("/users", userRouter); // http:localhost:8080/users/signup

const MONGODB_URL =
  "mongodb+srv://machika:AVx.FXwE.2JHmHa@cluster0.cs1mij3.mongodb.net/students_db?retryWrites=true&w=majority";

const port = 8080;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
