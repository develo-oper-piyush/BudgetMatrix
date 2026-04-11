const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-10 font-gilroy sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-amber-200 bg-white/80 p-6 shadow-sm md:p-8">
          <h1 className="text-3xl font-gilroy-bold text-violet-600 sm:text-4xl">
            About Budget Matrix
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Budget Matrix is built to make personal finance simple, practical,
            and consistent. The goal is to help users understand where money
            goes and make smarter choices each month.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-5 shadow-sm">
            <h2 className="text-lg font-gilroy-bold text-amber-800">
              Our Mission
            </h2>
            <p className="mt-2 text-sm text-amber-700">
              Help users build confidence through clear budgeting and simple
              tracking.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-100/70 p-5 shadow-sm">
            <h2 className="text-lg font-gilroy-bold text-violet-800">
              Our Approach
            </h2>
            <p className="mt-2 text-sm text-violet-700">
              Clean interface, relevant insights, and features that solve daily
              money tasks.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-5 shadow-sm">
            <h2 className="text-lg font-gilroy-bold text-amber-800">
              Our Focus
            </h2>
            <p className="mt-2 text-sm text-amber-700">
              Clarity, control, and long-term financial habits for every user.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm md:grid-cols-2 md:p-8">
          <div>
            <h2 className="text-2xl font-gilroy-bold text-slate-800">
              Why People Use It
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base list-disc">
              <li>Easy transaction entry and quick summaries</li>
              <li>Budget-friendly design with useful filters</li>
              <li>Local data persistence for continuity</li>
              <li>Beginner-friendly interface and navigation</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-violet-300 bg-violet-50 p-8 text-center text-sm text-violet-700">
            <img src="1.png" alt="" />
            <p className="mt-2 text-xl font-semibold text-violet-500">
              Budget Matrix
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
