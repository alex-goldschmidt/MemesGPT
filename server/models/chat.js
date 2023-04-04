const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { apiMessageSchema } = require("./apiMessage");
const { UserMessageSchema } = require("./UserMessage");
const { MemeSchema } = require("./meme");

// Define Chat schema
const ChatSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: { type: String, required: true }, // title of the chat/first meme title in a chat
  apiMessages: { type: [apiMessageSchema], required: true },
  userMessages: { type: [UserMessageSchema], required: true },
  memes: { type: [MemeSchema], required: true },
});

// Export model
module.exports = mongoose.model("Chat", ChatSchema);
