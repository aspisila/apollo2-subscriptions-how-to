import mongoose from "mongoose";

const ParishSchema = new mongoose.Schema({
    name: String,
    description: String,
    picture: String,
    city: String,
    state: String
});

const Parish = mongoose.model("parishes", ParishSchema);
export { Parish };