const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  amount: Number
});

module.exports = mongoose.model("Expense", ExpenseSchema);
