import { useMemo, useState, useEffect } from "react";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const currentYear = new Date().getFullYear();

const MonthlyExpenses = () => {
	const [monthlyExpenses, setMonthlyExpenses] = useState(() => {
		const saved = localStorage.getItem("monthlyExpenses");
		return saved
			? JSON.parse(saved)
			: monthNames.map((month) => ({
					month,
					amount: "",
				}));
	});
	const [formData, setFormData] = useState({
		month: monthNames[0],
		amount: "",
	});
	const [threshold, setThreshold] = useState(() => {
		const saved = localStorage.getItem("expenseThreshold");
		return saved ? saved : "";
	});

	// Save monthlyExpenses to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem(
			"monthlyExpenses",
			JSON.stringify(monthlyExpenses),
		);
	}, [monthlyExpenses]);

	// Save threshold to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("expenseThreshold", threshold);
	}, [threshold]);

	const handleSaveExpense = (e) => {
		e.preventDefault();

		if (!formData.amount) return;

		const parsedAmount = Number(formData.amount);
		if (Number.isNaN(parsedAmount)) return;

		setMonthlyExpenses((prev) =>
			prev.map((item) =>
				item.month === formData.month
					? { ...item, amount: parsedAmount }
					: item,
			),
		);

		setFormData({
			month: monthNames[0],
			amount: "",
		});
	};

	const forecastedExpenses = useMemo(() => {
		const resolvedValues = [];

		return monthlyExpenses.map((item) => {
			if (item.amount !== "") {
				const actualValue = Number(item.amount);
				resolvedValues.push(actualValue);

				return {
					...item,
					displayAmount: actualValue,
					status: "actual",
				};
			}

			if (resolvedValues.length >= 3) {
				const lastThreeValues = resolvedValues.slice(-3);
				const averageValue =
					lastThreeValues.reduce((sum, value) => sum + value, 0) / 3;

				resolvedValues.push(averageValue);

				return {
					...item,
					displayAmount: averageValue,
					status: "predicted",
				};
			}

			return {
				...item,
				displayAmount: null,
				status: "pending",
			};
		});
	}, [monthlyExpenses]);

	const thresholdValue = threshold === "" ? null : parseFloat(threshold);

	const thresholdAlerts = forecastedExpenses.filter(
		(item) =>
			item.status === "actual" &&
			thresholdValue !== null &&
			item.displayAmount !== null &&
			item.displayAmount > thresholdValue,
	);

	const totalActualExpenses = monthlyExpenses.reduce((sum, item) => {
		if (item.amount === "") return sum;
		return sum + Number(item.amount);
	}, 0);

	const completedMonths = monthlyExpenses.filter(
		(item) => item.amount !== "",
	).length;

	return (
		<div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-8 font-gilroy sm:px-8">
			<div className="mx-auto flex max-w-6xl flex-col gap-8">
				<section className="rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm md:p-8">
					<h1 className="text-3xl font-gilroy-bold text-violet-600 sm:text-4xl">
						Monthly Expenses
					</h1>
					<p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
						Manage your month-wise expenses for {currentYear}. Add
						at least three months to unlock the forecast for the
						next months. The prediction uses the average of the
						previous three months.
					</p>
					<p className="mt-3 max-w-3xl text-sm leading-7 sm:text-base text-red-700">
						*Note: The monthly prediction is based upon average of 3
						months, so it may be inaccurate in cases.
					</p>
				</section>

				<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-5 shadow-sm transition-all duration-100 hover:shadow-md">
						<p className="text-sm uppercase tracking-wide text-amber-700">
							Actual Months
						</p>
						<h2 className="mt-2 text-3xl font-gilroy-bold text-amber-800">
							{completedMonths}
						</h2>
					</div>
					<div className="rounded-2xl border border-violet-200 bg-violet-100/70 p-5 shadow-sm transition-all duration-100 hover:shadow-md">
						<p className="text-sm uppercase tracking-wide text-violet-700">
							Total Actual Expenses
						</p>
						<h2 className="mt-2 text-3xl font-gilroy-bold text-violet-800">
							₹{totalActualExpenses.toFixed(2)}
						</h2>
					</div>
					<div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-5 shadow-sm transition-all duration-100 hover:shadow-md">
						<p className="text-sm uppercase tracking-wide text-amber-700">
							Threshold
						</p>
						<h2 className="mt-2 text-3xl font-gilroy-bold text-amber-800">
							{thresholdValue === null
								? "Not Set"
								: `₹${thresholdValue.toFixed(2)}`}
						</h2>
					</div>
				</section>

				<section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm lg:col-span-1">
						<h2 className="text-2xl font-gilroy-bold text-amber-700">
							Add Month Expense
						</h2>
						<form
							onSubmit={handleSaveExpense}
							className="mt-4 space-y-3"
						>
							<select
								value={formData.month}
								onChange={(e) =>
									setFormData({
										...formData,
										month: e.target.value,
									})
								}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							>
								{monthNames.map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>

							<input
								type="number"
								min="0"
								placeholder="Monthly expense amount"
								value={formData.amount}
								onChange={(e) =>
									setFormData({
										...formData,
										amount: e.target.value,
									})
								}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							/>

							<input
								type="number"
								min="0"
								placeholder="Set threshold amount"
								value={threshold}
								onChange={(e) => setThreshold(e.target.value)}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							/>

							<button
								type="submit"
								className="cursor-pointer w-full rounded-xl bg-violet-500 px-4 py-2 font-gilroy-md text-white transition hover:bg-violet-600  duration-300 hover:ring-2 hover:shadow-xl hover:shadow-amber-50 active:scale-95 hover:ring-amber-300 shadow-violet-300 shadow-md"
							>
								Save Expense
							</button>
						</form>
					</div>

					<div className="rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm lg:col-span-2">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<h2 className="text-2xl font-gilroy-bold text-amber-700">
								Monthly Breakdown
							</h2>
							<p className="text-sm text-slate-600">
								Prediction starts after 3 months.
							</p>
						</div>

						{thresholdAlerts.length > 0 ? (
							<div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
								Alert:{" "}
								{thresholdAlerts
									.map(
										(item) =>
											`${item.month} exceeded the threshold`,
									)
									.join(", ")}
							</div>
						) : null}

						<div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
							{forecastedExpenses.map((item) => (
								<div
									key={item.month}
									className={`rounded-2xl border p-4 shadow-sm transition-all duration-100 hover:shadow-md ${
										item.status === "actual"
											? "border-amber-200 bg-amber-50"
											: item.status === "predicted"
												? "border-violet-200 bg-violet-50"
												: "border-slate-200 bg-slate-50"
									}`}
								>
									<div className="flex items-center justify-between gap-3">
										<h3 className="text-lg font-gilroy-bold text-slate-800">
											{item.month}
										</h3>
										<span className="rounded-full px-3 py-1 text-xs font-gilroy-md uppercase tracking-wide">
											{item.status}
										</span>
									</div>

									<p className="mt-3 text-sm text-slate-600">
										Year: {currentYear}
									</p>

									<p className="mt-2 text-2xl font-gilroy-bold text-slate-800">
										{item.displayAmount === null
											? "Waiting for 3 months"
											: `₹${item.displayAmount.toFixed(2)}`}
									</p>

									{thresholdValue !== null &&
									item.status === "actual" &&
									item.displayAmount > thresholdValue ? (
										<p className="mt-2 text-sm font-gilroy-md text-rose-600">
											Expense exceeded the threshold.
										</p>
									) : null}
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default MonthlyExpenses;
