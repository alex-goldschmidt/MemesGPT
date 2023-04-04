const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define apiOutput schema
const apiMessageSchema = new Schema({
  imageURL: { type: String, required: true },
  template: { type: String, required: true },
  topText: { type: String, required: true },
  bottomText: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("apiMessage", apiMessageSchema);
