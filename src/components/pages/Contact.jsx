import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmitted(true);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-10 font-gilroy sm:px-8">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
				<section className="rounded-3xl border border-amber-200 bg-white/80 p-6 shadow-sm md:p-8">
					<h1 className="text-3xl font-gilroy-bold text-violet-600 sm:text-4xl">
						Contact Us
					</h1>
					<p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
						Have a question, suggestion, or feature request? Reach
						out and we will get back to you.
					</p>
				</section>

				<section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="rounded-2xl border border-amber-200 bg-white/85 p-6 shadow-sm lg:col-span-2">
						<h2 className="text-xl font-gilroy-bold text-amber-700">
							Send a Message
						</h2>
						<form
							onSubmit={handleSubmit}
							className="mt-4 space-y-3"
						>
							<input
								type="text"
								placeholder="Your Name"
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							/>
							<input
								type="email"
								placeholder="Email Address"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							/>
							<textarea
								rows="5"
								placeholder="Write your message..."
								value={formData.message}
								onChange={(e) =>
									setFormData({
										...formData,
										message: e.target.value,
									})
								}
								className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
							></textarea>
							<button
								type="submit"
								className="cursor-pointer rounded-xl bg-violet-500 px-5 py-2.5 font-gilroy-md text-white transition hover:bg-violet-600 duration-300 hover:ring-2 hover:shadow-xl hover:shadow-amber-50 active:scale-95 hover:ring-amber-300"
							>
								Send Message
							</button>
						</form>

						{submitted ? (
							<p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
								Thanks for reaching out. We will get back to you
								soon.
							</p>
						) : null}
					</div>

					<div className="rounded-2xl border border-violet-200 bg-violet-100/70 p-6 shadow-sm">
						<h2 className="text-xl font-gilroy-bold text-violet-800">
							Contact Details
						</h2>
						<p className="mt-3 text-sm text-violet-700">
							Email: support@budgetmatrix.app
						</p>
						<p className="mt-2 text-sm text-violet-700">
							Phone: +91 90000 00xxxx
						</p>
						<p className="mt-2 text-sm text-violet-700">
							Hours: Mon - Sat, 9:00 AM - 6:00 PM
						</p>

						<div className="mt-6 rounded-xl border border-dashed border-violet-300 bg-white/60 p-5 text-center text-xs text-violet-600">
							<img src="map.png" alt="" />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;
