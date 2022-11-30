import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://atlassoccer:atlassoccer@cluster0.r0doihh.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
await client.connect();

await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
const collection = client.db("soccer").collection("players");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" }).status(200);
});

app.get("/find/:name", async (req, res) => {
  const players = await collection
    .find({ short_name: req.params.name })
    .toArray();
  res.json(players).status(200);
});

app.get("/regex/:name", async (req, res) => {
  const players = await collection
    .find({ short_name: new RegExp(req.params.name, "i") })
    .toArray();
  res.json(players).status(200);
});

app.get("/search/:name", async (req, res) => {
  const players = await collection
    .find({ short_name: req.params.name })
    .toArray();
  res.json(players).status(200);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
