import express from "express";
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb";

const router = express.Router();


// Get a single person
router.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("person");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.findOne(query);

    if (!result) return res.status(404).send("Not found");
    const {_id, ...rest} =  result;
    
    res.status(200).json({"id": _id, ...rest});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Add a new person to the collection
router.post("/", async (req, res) => {
  try {
    const collection = db.collection("person");
    const {name, age, email}= req.body;

    if(!name || typeof name !== "string") {
      return res.status(400).json({"message": "Bad request"})
    }

    const date = new Date();
    let result = await collection.insertOne({name, age, email, date});
    res.json({"id": result.insertedId, name, age, email}).status(204);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }

});

// Update person
router.put("/:id", async (req, res) => {
  try {
    const collection = db.collection("person");
    const query = { _id: new ObjectId(req.params.id) };
    if(!req.body.name || typeof req.body.name !== "string") {
      return res.status(400).json({"message": "Bad request"})
    }
    const update = {
      $set: { name: req.body.name, age: req.body.age, email: req.body.email }
    };

    const result = await collection.updateOne(query, update);

    if (result.matchedCount === 0) {
      return res.status(404).json({"message": "Not found"});
    }

    const getQuey = { _id: new ObjectId(req.params.id) };
    const person = await collection.findOne(getQuey);

    const {_id, ...rest} =  person;

    res.status(200).json({"id": _id, ...rest});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("person");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});


export default router;