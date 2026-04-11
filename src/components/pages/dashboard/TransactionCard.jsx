const TransactionCard = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === "income";

  return (
    <div className="rounded-2xl border border-amber-200 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-gilroy-bold text-slate-800">
            {transaction.name}
          </h4>
          <p className="text-sm font-gilroy text-slate-500">
            {transaction.category}
          </p>
          <p className="mt-1 text-xs font-gilroy text-slate-400">
            {transaction.date}
          </p>
        </div>

        <div className="text-right">
          <p
            className={`text-lg font-gilroy-bold ${
              isIncome ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {isIncome ? "+" : "-"}${transaction.amount.toFixed(2)}
          </p>
          <button
            type="button"
            onClick={() => onDelete(transaction.id)}
              className="mt-2 cursor-pointer rounded-lg border border-rose-200 px-3 py-1 text-xs font-gilroy-md text-rose-600 transition hover:bg-rose-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
