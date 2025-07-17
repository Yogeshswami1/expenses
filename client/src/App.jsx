// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./App.css"
// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [title, setTitle] = useState('');
//   const [amount, setAmount] = useState('');

//   const fetchExpenses = async () => {
//     const res = await axios.get('/api/expenses');
//     setExpenses(res.data);
//   };

//   const addExpense = async () => {
//     await axios.post('/api/expenses', { title, amount });
//     setTitle('');
//     setAmount('');
//     fetchExpenses();
//   };

//   const deleteExpense = async (id) => {
//     await axios.delete(`/api/expenses/${id}`);
//     fetchExpenses();
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Expense Tracker</h1>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         value={amount}
//         onChange={e => setAmount(e.target.value)}
//         placeholder="Amount"
//         type="number"
//       />
//       <button onClick={addExpense}>Add</button>

//      <ul>
//   {Array.isArray(expenses) && expenses.map(exp => (
//     <li key={exp._id}>
//       {exp.title} - ₹{exp.amount}
//       <button onClick={() => deleteExpense(exp._id)}>❌</button>
//     </li>
//   ))}
// </ul>

//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const fetchExpenses = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/expenses`);
    setExpenses(res.data);
  };

  const addExpense = async () => {
    if (!title || !amount) return;
    await axios.post(`${BACKEND_URL}/api/expenses`, { title, amount });
    setTitle('');
    setAmount('');
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${BACKEND_URL}/api/expenses/${id}`);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="wrapper">
      <div className="tracker-box">
        <h1>Expeense Yogesh Tracker hanji💰</h1>

        <div className="form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            type="number"
          />
          <button onClick={addExpense}>Add</button>
        </div>

        <ul className="expense-list">
          {expenses.map((exp) => (
            <li key={exp._id}>
              <span>{exp.title}</span>
              <span>₹{exp.amount}</span>
              <button onClick={() => deleteExpense(exp._id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
