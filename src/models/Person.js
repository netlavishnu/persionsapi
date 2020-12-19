import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    fathername: { type: String, required: true },
    age: { type: String, required: true },
    Gender: { type: String, required: true },
  },
  { collection: "Person" }
);

export default mongoose.model("Person", schema);
