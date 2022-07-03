import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import LOGIN from "../graphql/LOGIN";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState();

    const [login] = useMutation(LOGIN, {
        variables: {
            email: email,
            password: password,
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login();
            localStorage.setItem("token", data.login);
            navigate("/");
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
            <div className="flex flex-column">
                <div className="pr-10 hidden md:block">
                    <img src="/images/iphone-instagram.png" width="300" />
                </div>
                <div>
                    <div className="bg-white border border-gray-300 w-80 pt-10 pb-60 flex items-center flex-col mb-3 relative">
                        <img src="/images/logo-instagram.svg" width="200" />
                        <form
                            className="mt-8 w-64 flex flex-col"
                            onSubmit={handleSubmit}
                        >
                            <input
                                autoFocus
                                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                placeholder="Phone number, username, or email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                autoFocus
                                className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium"
                            >
                                Log In
                            </button>
                        </form>
                        <div
                            className={`text-sm text-center text-red-500 absolute bottom-20 px-8 ${
                                error ? "" : "hidden"
                            }`}
                        >
                            Sorry, your email/password was incorrect. Please
                            double-check and try again.
                        </div>
                    </div>
                    <div className="bg-white border border-gray-300 text-center w-80 py-4">
                        <span className="text-sm">Don't have an account?</span>
                        <a className="text-blue-500 text-sm font-semibold ml-1 cursor-pointer">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
