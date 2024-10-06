import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { Message } from "./schemas/Messages.js";

await mongoose.connect("mongodb://localhost:27017/messages");

const app = express();

app.use(bodyParser.json());

app.use(
  cors()
);

app.get("/messages", async (req, res) => {
  res.json(await Message.find());
});

app.post("/", async (req, res) => {
  await Message.create({
    username: req.body.username,
    email: req.body.email,
    message: req.body.message,
  });
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Listening...");
});
