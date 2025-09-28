import express from "express";
import db from "./db/connection.js";
import logger from "morgan";
import cors from "cors";

import tracksRouter from "./routes/tracks.js";

const app = express();

// middleware
app.use(express.json());
app.use(logger("dev"));
// controls who can access db
app.use(cors());


app.use("/tracks", tracksRouter);

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("The express app is ready!");
  });
});