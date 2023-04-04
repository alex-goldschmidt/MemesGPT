const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  template: { type: String, required: true },
  imageURL: { type: String, required: true },
  topText: { type: String, required: true },
  bottomText: { type: String, required: true },
});

module.exports = mongoose.model("Meme", MemeSchema);
