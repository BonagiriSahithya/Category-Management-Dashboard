const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  itemCount: Number,
  image: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Category", CategorySchema);
