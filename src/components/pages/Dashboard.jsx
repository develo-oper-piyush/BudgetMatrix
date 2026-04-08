import React, { useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const [trans, setTrans] = useState({
    name: "",
    amount: "",
    type: "expense",
    category: "",
  });

  const [filter, setFilter] = useState("All");

  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") totalIncome += t.amount;
    else totalExpenses += t.amount;
  });

  const remainingBudget = totalIncome - totalExpenses;

  const savingsRate =
    totalIncome === 0 ? 0 : Math.round((remainingBudget / totalIncome) * 100);

  const handleAddTransaction = () => {
    if (!trans.name || !trans.amount || !trans.category) return;

    const newTransaction = {
      id: Date.now(),
      name: trans.name,
      amount: parseFloat(trans.amount),
      type: trans.type,
      category: trans.category,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setTransactions([newTransaction, ...transactions]);

    setTrans({
      name: "",
      amount: "",
      type: "expense",
      category: "",
    });
  };

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter.toLowerCase());

  return (
    <div className="flex flex-col justify-start items-start bg-amber-50 h-screen font-gilroy">
      <h1 className="text-3xl text-violet-400 self-start ml-5 mt-5 font-gilroy-bold underline">
        Dashboard
      </h1>

      {/* SUMMARY */}
      <div className="ml-10 mt-10 flex flex-col gap-3">
        <div className="flex justify-between gap-10">
          <h3 className="text-amber-600 font-bold text-2xl">Total Income</h3>
          <h2 className="badge badge-dash p-4">{totalIncome}</h2>
        </div>

        <div className="flex justify-between gap-10">
          <h3 className="text-amber-600 font-bold text-2xl">Total Expenses</h3>
          <h2 className="badge badge-dash p-4">{totalExpenses}</h2>
        </div>

        <div className="flex justify-between gap-10">
          <h3 className="text-amber-600 font-bold text-2xl">
            Remaining Budget
          </h3>
          <h2 className="badge badge-dash p-4">{remainingBudget}</h2>
        </div>

        <div className="flex justify-between gap-10">
          <h3 className="text-amber-600 font-bold text-2xl">Savings Rate</h3>
          <h2 className="badge badge-dash p-4">{savingsRate}%</h2>
        </div>
      </div>

      {/* ADD TRANSACTION */}
      <div>
        <h2>Add Transaction</h2>

        <input
          placeholder="Transaction Name"
          value={trans.name}
          onChange={(e) => setTrans({ ...trans, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          value={trans.amount}
          onChange={(e) => setTrans({ ...trans, amount: e.target.value })}
        />

        <select
          value={trans.type}
          onChange={(e) => setTrans({ ...trans, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        {/* ✅ Category only for display */}
        <input
          placeholder="Category (e.g. Food, Rent)"
          value={trans.category}
          onChange={(e) => setTrans({ ...trans, category: e.target.value })}
        />

        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      {/* FILTER */}
      <div>
        {["All", "Income", "Expense"].map((type) => (
          <button key={type} onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>

      {/* TRANSACTIONS */}
      <div>
        <h2>Transactions</h2>

        {filteredTransactions.length === 0 ? (
          <p>No transactions</p>
        ) : (
          filteredTransactions.map((t) => (
            <div key={t.id}>
              <h4>{t.name}</h4>

              <p>Category: {t.category}</p>

              <p>{t.date}</p>

              <p>
                {t.type === "income" ? "+" : "-"}
                {t.amount}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
