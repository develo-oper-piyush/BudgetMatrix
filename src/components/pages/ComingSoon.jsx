import { NavLink } from "react-router-dom";
import { useState } from "react";

const ComingSoon = () => {
	const [suggestion, setSuggestion] = useState({
		name: "",
		email: "",
		feature: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setSuggestion({
			name: "",
			email: "",
			feature: "",
		});
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-10 font-gilroy sm:px-8">
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
				<section className="rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm md:p-8">
					<h1 className="text-3xl font-gilroy-bold text-violet-600 sm:text-4xl">
						Coming Soon
					</h1>
					<p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
						This page will show the next set of features planned for
						Budget Matrix. The goal is to make the app smarter, more
						helpful, and more analytical for future financial
						tracking.
					</p>
				</section>

				<section className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm md:p-8">
					<h2 className="text-2xl font-gilroy-bold text-violet-700">
						Upcoming Feature Card
					</h2>

					<div className="mt-5 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
						<h3 className="text-xl font-gilroy-bold text-amber-700">
							Bank Statement Upload and AI Analysis
						</h3>
						<p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
							Users will be able to upload a complete bank
							statement document in the future. The AI model will
							read the statement, identify income and expense
							transactions, and list them automatically inside the
							app.
						</p>
						<p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
							After analyzing the uploaded statement, the app will
							also predict future month transactions and expenses
							and show the results in an analytical dashboard.
						</p>
						<ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 sm:text-base">
							<li>Upload complete bank statement files.</li>
							<li>
								Auto-list transactions after document analysis.
							</li>
							<li>Predict future spending patterns with AI.</li>
							<li>
								Show insights in a future analytical dashboard.
							</li>
						</ul>
					</div>
				</section>

				<section className="rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm md:p-8">
					<h2 className="text-2xl font-gilroy-bold text-amber-700">
						Suggest a Feature
					</h2>
					<p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
						Share your feature ideas for Budget Matrix. This form is
						here for future feedback and planning.
					</p>

					<form onSubmit={handleSubmit} className="mt-5 space-y-3">
						<input
							type="text"
							placeholder="Your Name"
							value={suggestion.name}
							onChange={(e) =>
								setSuggestion({
									...suggestion,
									name: e.target.value,
								})
							}
							className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
						/>
						<input
							type="email"
							placeholder="Email Address"
							value={suggestion.email}
							onChange={(e) =>
								setSuggestion({
									...suggestion,
									email: e.target.value,
								})
							}
							className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
						/>
						<textarea
							rows="5"
							placeholder="Describe the feature you want to see..."
							value={suggestion.feature}
							onChange={(e) =>
								setSuggestion({
									...suggestion,
									feature: e.target.value,
								})
							}
							className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
						></textarea>
						<button
							type="submit"
							className="cursor-pointer rounded-xl bg-violet-500 px-5 py-2.5 font-gilroy-md text-white transition hover:bg-violet-600 duration-300 hover:ring-2 hover:shadow-xl hover:shadow-amber-50 active:scale-95 hover:ring-amber-300"
						>
							Submit Suggestion
						</button>
					</form>

					{submitted ? (
						<p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
							Thanks for your suggestion. We will review it for
							future updates.
						</p>
					) : null}
				</section>

				<div className="flex flex-wrap gap-3">
					<NavLink
						to="/dashboard"
						className="cursor-pointer rounded-xl bg-violet-500 px-5 py-2.5 font-gilroy-md text-white transition hover:bg-violet-600 duration-300 hover:ring-2 hover:shadow-xl hover:shadow-amber-50 active:scale-95 hover:ring-amber-300"
					>
						Go to Dashboard
					</NavLink>
					<NavLink
						to="/home"
						className="cursor-pointer rounded-xl border border-amber-200 bg-white px-5 py-2.5 font-gilroy-md text-slate-700 transition hover:bg-amber-50"
					>
						Back to Home
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
