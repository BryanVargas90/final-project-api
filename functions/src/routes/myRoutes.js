import express from "express";
import {
  createAppointment,
  deleteAppoinment,
  getAllAppoinment,
  getAppointment,
} from "../controlles/myControllers.js";

const sessionRoute = express.Router();
sessionRoute.post("/session", createAppointment);
sessionRoute.get("/session/:sessionId", getAppointment);
sessionRoute.get("/sessions", getAllAppoinment);
sessionRoute.delete("/session/:sessionId", deleteAppoinment);

export { sessionRoute };
