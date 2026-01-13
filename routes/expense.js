const express = require("express");
const jwt = require("jsonwebtoken");
const Expense = require("../models/Expense");

const router = express.Router();

// TOKEN CHECK
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Token missing");
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};


// ADD EXPENSE
router.post("/add", auth, async (req, res) => {
  const { title, amount } = req.body;

  await Expense.create({
    userId: req.userId,
    title,
    amount
  });

  res.send("Expense Added");
});

// LIST EXPENSE
router.get("/list", auth, async (req, res) => {
  const data = await Expense.find({ userId: req.userId });
  res.json(data);
});

module.exports = router;
