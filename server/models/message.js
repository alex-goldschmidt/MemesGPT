const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Message schema
const MessageSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  author: { type: String, enum: ["user", "api"], required: true },
  content: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
