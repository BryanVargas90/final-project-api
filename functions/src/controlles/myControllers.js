import Session from "../models/games.js";

// Add a new document to the collection
export const createAppointment = async (req, res) => {
  const session = new Session({
    game: req.body.game,
    platform: req.body.platform,
    rating: req.body.rating,
    image: req.body.image,
  });
  const newSession = await session.save();
  res.status(201).send(newSession);
};

//read one
export const getAppointment = async (req, res) => {
  const session = await Session.findById(req.params.sessionId);
  console.log(session);
  res.status(200).send(session);
};

//Get all
export const getAllAppoinment = async (req, res) => {
  const session = await Session.find();
  res.status(200).send(session);
};

//Delete
export const deleteAppoinment = async (req, res) => {
  const session = await Session.deleteOne({ _id: req.params.sessionId });
  res.status(200).send(session);
};
