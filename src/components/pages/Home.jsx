const Home = () => {
    return (
        <div className="relative flex flex-col justify-center items-center font-gilroy-md text-charcoal bg-linear-to-t from-white to-violet-400 h-screen p-10">
            {/* This below div is for the background setup using component*/}
            <div className="absolute inset-0"></div>
            <div className="relative z-10 flex justify-around">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="text-5xl font-extrabold mr-2">
                        Budget <span className="text-violet-700">Matrix</span>
                    </h2>
                    <p className="text-3xl max-w-90 font-semibold mt-12">
                        Take Control of Your Finances with{" "}
                        <span className="text-violet-500">Budget Matrix</span>
                    </p>
                    <p className="text-md mt-8 max-w-100">
                        Budget Matrix is a powerful and intuitive expense
                        tracking platform designed to help you monitor spending,
                        manage budgets, and gain complete visibility into your
                        financial habits—all in one place.
                    </p>
                </div>
                <div className="w-[70%]">
                    <img src="/1.png" alt="" />
                </div>
            </div>
            <div className="mt-10 mb-10">
                <p className="text-4xl font-bold">
                    Clarity. Control. Confidence.
                </p>
                <p className="text-xl">
                    Track every expense, categorize your spending, and make
                    smarter financial decisions with real-time insights and
                    structured budgeting tools built for everyday use.
                </p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-violet-500 absolute left-10 bottom-0 cursor-pointer hover:scale-110 transition-all duration-300"
            >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
            </svg>
        </div>
    );
};

export default Home;
