const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t08r2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  //   try {
  // Connect the client to the server	(optional starting in v4.7)
  // await client.connect();

  const equipmentCollection = client
    .db("hyperloadoutDB")
    .collection("equipments");

  app.get("/equipments", async (req, res) => {
    const cursor = equipmentCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  });

  app.post("/equipments", async (req, res) => {
    const newEquipment = req.body;

    const result = await equipmentCollection.insertOne(newEquipment);
    res.send(result);
  });

  // get data by id
  app.get("/equipment/:id", async (req, res) => {
    const id = req.params.id;

    const query = { _id: new ObjectId(id) };
    const result = await equipmentCollection.findOne(query);
    res.send(result);
  });

  // get data by email
  app.get("/my-equipment/:email", async (req, res) => {
    const user_email = req.params.email;

    const query = { email: user_email };
    const cursor = equipmentCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  });

  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //   } finally {
  // Ensures that the client will close when you finish/error
  // await client.close();
  //   }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
