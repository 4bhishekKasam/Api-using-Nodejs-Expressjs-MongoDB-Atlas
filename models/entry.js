const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  id: Number,
  name: String,
  categoryId: Number,
  category: Object,
  paid: Boolean,
  date: Date,
  amount: Number,
  type: String,
  description: String
});

module.exports = mongoose.model("Entry", EntrySchema);
