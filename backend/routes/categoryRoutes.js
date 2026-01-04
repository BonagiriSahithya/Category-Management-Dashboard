const express = require("express");
const Category = require("../models/Category");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const categories = await Category.find({ userId: req.userId });
  res.json(categories);
});

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    // Check if category already exists for this user
    const existing = await Category.findOne({ name, userId: req.userId });
    if (existing) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await Category.create({
      ...req.body,
      userId: req.userId
    });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", auth, async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

module.exports = router;
