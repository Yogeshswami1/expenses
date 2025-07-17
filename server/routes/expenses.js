import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

router.post('/', async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.status(201).json(expense);
});

router.delete('/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
