const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define apiOutput schema
const apiOutputSchema = new Schema({
  URL: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

// Export model
module.exports = mongoose.model("apiOutput", apiOutputSchema);
