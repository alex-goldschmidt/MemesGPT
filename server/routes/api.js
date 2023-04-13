var express = require("express");
var router = express.Router();
const UserMessage = require("../models/UserMessage");

router.post("/messages", async (req, res) => {
  const { template, topText, bottomText } = req.body;

  const newUserMessage = new UserMessage({
    template,
    topText,
    bottomText,
  });

  try {
    const savedMessage = await newUserMessage.save();
    return res.json({ success: true, message: savedMessage });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Error saving user message" });
  }
});

module.exports = router;
