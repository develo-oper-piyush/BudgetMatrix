import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    // Fixed demo credentials for demonstration.
    const DEMO_USERNAME = "demoUser";
    const DEMO_PASSWORD = "demoPass123";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            credentials.username === DEMO_USERNAME &&
            credentials.password === DEMO_PASSWORD
        ) {
            setError("");
            navigate("/dashboard");
            return;
        }

        setError("Invalid username or password. Try demo credentials below.");
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50 to-violet-100 px-4 py-10 font-gilroy sm:px-8">
            <div className="mx-auto max-w-md rounded-3xl border border-amber-200 bg-white/85 p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-gilroy-bold text-violet-600">
                    Login
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    Enter the demo account to continue to Dashboard.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) =>
                            setCredentials({
                                ...credentials,
                                username: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) =>
                            setCredentials({
                                ...credentials,
                                password: e.target.value,
                            })
                        }
                        className="w-full rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 outline-none transition focus:ring-2 focus:ring-violet-300"
                    />

                    <button
                        type="submit"
                        className="cursor-pointer w-full rounded-xl bg-violet-500 px-4 py-2 font-gilroy-md text-white transition-all hover:bg-violet-600 duration-300 hover:ring-2 hover:shadow-xl hover:shadow-amber-50 active:scale-95 hover:ring-amber-300"
                    >
                        Login
                    </button>
                </form>

                {error ? (
                    <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-600">
                        {error}
                    </p>
                ) : null}

                <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-3 text-sm text-violet-700">
                    <p>Demo Username: demoUser</p>
                    <p>Demo Password: demoPass123</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
