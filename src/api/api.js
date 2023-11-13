const express = require("express");
const connectToMongo = require("../db/mongoConnection");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());

app.get("/data", async (req, res) => {
  const db = await connectToMongo();
  const collection = db.collection("dev_status");

  try {
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
