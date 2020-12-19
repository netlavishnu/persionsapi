import express, { response } from "express";
import person from "./routes/person";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

//to access dotenv
dotenv.config();
//to use in another domain or project
app.use(cors());
//bodyparser
app.use(bodyParser.json());
// console.log(process.env.MONGODB_URL);
//access DataBase
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to DB")
);
//Routes
app.use("/persons", person);

app.get("/", (req, res) => res.json({ name: "vishnu" }));

app.listen(8080, () => console.log("server started at 8080"));
