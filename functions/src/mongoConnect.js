import dotenv from "dotnenv";

dotenv.config();
const mongoURI = pro.env.mongoURI;

import { MongoClient } from "mongodb"; //This allows you connect to the api
import { mongoURI } from "../secrets.js"; // This conneting to the database and holds my credentials.

const client = new MongoClient(mongoURI);

export const db = client.db("games_api");
