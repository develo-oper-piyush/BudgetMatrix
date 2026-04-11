import React, { useEffect, useState } from "react";
import SummaryCard from "./dashboard/SummaryCard";
import TransactionCard from "./dashboard/TransactionCard";

const STORAGE_KEY = "budget-matrix-transactions";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const [trans, setTrans] = useState({
    name: "",
    amount: "",
    type: "expense",
    category: "",
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Load saved transactions once when page opens.
    const savedTransactions = localStorage.getItem(STORAGE_KEY);

    if (savedTransactions) {
      try {
        const parsed = JSON.parse(savedTransactions);
        if (Array.isArray(parsed)) {
          setTransactions(parsed);
        }
      } catch (error) {
        console.error("Failed to parse saved transactions:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Keep localStorage synced with latest transactions.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") totalIncome += t.amount;
    else totalExpenses += t.amount;
  });

  const remainingBudget = totalIncome - totalExpenses;

  const savingsRate =
    totalIncome === 0 ? 0 : Math.round((remainingBudget / totalIncome) * 100);

  const handleAddTransaction = (e) => {
    e.preventDefault();

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

    setTransactions((prev) => [newTransaction, ...prev]);

    setTrans({
      name: "",
      amount: "",
      type: "expense",
      category: "",
    });
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id),
    );
  };

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-8 font-gilroy sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-gilroy-bold text-violet-500 underline sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-5">
          <span className="text-4xl font-bold text-violet-500">
            Welcome back
          </span>
          <p className="mt-2 text-md font-semibold text-slate-600 sm:text-base">
            Track income, expenses, and keep your budget under control.
            <br />
            Take a look at your transactions in a glance.
          </p>
        </p>

        {/* Summary cards */}
        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Income"
            value={`$${totalIncome.toFixed(2)}`}
          />
          <SummaryCard
            title="Total Expenses"
            value={`$${totalExpenses.toFixed(2)}`}
          />
          <SummaryCard
            title="Remaining Budget"
            value={`$${remainingBudget.toFixed(2)}`}
          />
          <SummaryCard title="Savings Rate" value={`${savingsRate}%`} />
        </section>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Add transaction form */}
          <section className="rounded-2xl border border-amber-200 bg-white/80 p-5 shadow-sm lg:col-span-1">
            <h2 className="text-xl font-gilroy-bold text-amber-700">
              Add Transaction
            </h2>

            <form onSubmit={handleAddTransaction} className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                placeholder="Transaction Name"
                value={trans.name}
                onChange={(e) => setTrans({ ...trans, name: e.target.value })}
              />

              <input
                type="number"
                className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                placeholder="Amount"
                value={trans.amount}
                onChange={(e) => setTrans({ ...trans, amount: e.target.value })}
              />

              <select
                className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                value={trans.type}
                onChange={(e) => setTrans({ ...trans, type: e.target.value })}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <input
                className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                placeholder="Category (Food, Rent, Salary...)"
                value={trans.category}
                onChange={(e) =>
                  setTrans({ ...trans, category: e.target.value })
                }
              />

              <button
                type="submit"
                className="cursor-pointer w-full rounded-xl bg-violet-500 px-4 py-2 font-gilroy-md text-white transition hover:bg-violet-600"
              >
                Add Transaction
              </button>
            </form>
          </section>

          {/* Transactions list */}
          <section className="rounded-2xl border border-amber-200 bg-white/80 p-5 shadow-sm lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-gilroy-bold text-amber-700">
                Transactions
              </h2>

              <div className="flex gap-2">
                {["All", "Income", "Expense"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFilter(type)}
                    className={`cursor-pointer rounded-lg border px-3 py-1 text-sm font-gilroy-md transition ${
                      filter === type
                        ? "border-violet-500 bg-violet-500 text-white"
                        : "border-amber-200 bg-amber-50 text-slate-700 hover:bg-amber-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {filteredTransactions.length === 0 ? (
                <p className="rounded-xl bg-amber-50 p-3 text-sm text-slate-500">
                  No transactions found.
                </p>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TransactionCard
                    key={transaction.id}
                    transaction={transaction}
                    onDelete={handleDeleteTransaction}
                  />
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
