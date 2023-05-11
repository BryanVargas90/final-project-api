import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoURI } from "./secrets.js";
import { sessionRoute } from "./src/routes/myRoutes.js";

const api = express(); // create our express app
api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});
api.use(sessionRoute);

//This is my mongoose connection
// const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI, {
  // userNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "games",
});
mongoose.connection.on("connected", () => {
  console.log("Mongo Database connected 🤓");
});

api.use(sessionRoute);
const port = 3009;
// app.listen(port, () => {
//   console.log(`Server is running on port: http://localhost:${port}/api/`);
// });

export const app = functions.https.onRequest(api);
