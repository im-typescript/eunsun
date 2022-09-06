import { MongoClient } from "mongodb";

export const connect = async (mongoUrl: string = "mongodb://localhost:27017") =>
  MongoClient.connect(mongoUrl);
