import { db } from "./mongoConnect.js";
import { ObjectId } from "mongodb";

const coll = db.collection("sessions");

// CRUD: POST
export async function createAppointment(req, res) {
  let appoinment = {
    host: req.body.host,
    game: req.body.game,
    date: req.body.date,
    time: req.body.time,
  };
  const newAppoinment = req.body;
  await coll.insertOne(appoinment);
  res.status(201).send({ message: "new appoinment added" });
}

//CRUD : Get
export async function getAllAppoinments(req, res) {
  const myAppoinments = await coll.find({}).toArray();
  res.status(200).send(myAppoinments);
}

export async function getAppointment(req, res) {
  const myAppoinment = await coll.findOne({});
  res.status(200).send(myAppoinment);
}

// CRUD: DELETE
export async function deleteAppoinment(req, res) {
  const sessionId = { _id: new ObjectId(req.params.sessionId) };

  await coll.deleteOne(sessionId);
  res.status(200).send({ message: "Session has been deleted." });
}

// CRUD: UPDATE
export async function updateAppoinment(req, res) {
  const { sessionId } = req.params;
  const updateAppoinment = req.body;
  await coll
    .updateOne({ _id: new ObjectId(sessionId) }, { $set: updateAppoinment })
    .catch((err) => res.status(500).send(err));
  res.status(200).send({ message: "Session has been updated" });
}
