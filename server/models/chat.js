const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { apiOutputSchema } = require("./apiOutput");
const { MessageSchema } = require("./apiOutput");

// Define Chat schema
const ChatSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  chatTitle: { type: String, required: true },
  memeTitle: { type: String, required: true },
  topText: { type: String, required: true },
  bottomText: { type: String, required: true },
  apiOutput: { type: [apiOutputSchema], required: true },
  messages: { type: [MessageSchema], required: true },
});

// Export model
module.exports = mongoose.model("Chat", ChatSchema);
