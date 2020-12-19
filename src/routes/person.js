import express from "express";
import Person from "../models/Person";

const router = express.Router();

//READ

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.json({ message: err });
  }
});

//CREATE
router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    fathername: req.body.fathername,
    age: req.body.age,
    Gender: req.body.Gender,
  });
  try {
    const savedPerson = await person.save();

    res.json(savedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

//FINDBYID

router.get("/:personId", async (req, res) => {
  try {
    const person = await Person.findById(req.params.personId);
    res.json(person);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE

router.delete("/:personId", async (req, res) => {
  try {
    const removedPerson = await Person.remove({ _id: req.params.personId });
    res.json(removedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE
router.patch("/:personId", async (req, res) => {
  try {
    const updatePerson = await Person.updateOne(
      { _id: req.params.personId },
      {
        $set: {
          name: req.body.name,
          fathername: req.body.fathername,
          age: req.body.age,
          Gender: req.body.Gender,
        },
      }
    );
    res.json(updatePerson);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
