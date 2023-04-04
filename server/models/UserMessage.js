const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Message schema
const UserMessageSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  template: { type: String, required: true },
  topText: { type: String, required: true },
  bottomText: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("UserMessage", UserMessageSchema);
