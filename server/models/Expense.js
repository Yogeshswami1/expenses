import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Expense', expenseSchema);
