import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import {
  createAppointment,
  deleteAppoinment,
  getAllAppoinments,
  getAppointment,
  updateAppoinment,
} from "./src/mySessions.js";

const api = express(); // create our express app
api.use(cors());
api.use(express.json());

api.post("/session", createAppointment);
api.get("/session/:sessionId", getAppointment);
api.get("/sessions", getAllAppoinments);
api.patch("/session/:sessionId", updateAppoinment);
api.delete("/session/:sessionId", deleteAppoinment);

api.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

api.post("/addsession", (req, res) => {
  res.json({
    message: "hello",
  });
});

api.get("/sessionTest", (req, res) => {
  res.send({ message: "ouasdhaiuskdhsauds" });
});

const port = 5005;
api.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}/api/`);
});

export const app = functions.https.onRequest(api);
