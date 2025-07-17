import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import expensesRoutes from './routes/expenses.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://expense.yogeshtech.xyz",
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/expenses', expensesRoutes);

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
