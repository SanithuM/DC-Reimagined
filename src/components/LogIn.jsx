import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-neutral-900/60 backdrop-blur-md rounded-2xl shadow-lg p-8"
            >
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-center text-white">
                    Welcome Back
                </h2>
                <p className="text-sm text-neutral-400 text-center mt-2">
                    Login to your <span className="text-blue-400">DCRe</span> account
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-neutral-400">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded bg-neutral-700 border-neutral-600"
                            />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-400 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors duration-300"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-neutral-700"></div>
                    <span className="px-3 text-sm text-neutral-500">OR</span>
                    <div className="flex-1 h-px bg-neutral-700"></div>
                </div>

                {/* Social login */}
                <div className="flex flex-col space-y-3 mt-6">
                    <button className="flex items-center justify-center gap-2 bg-white text-gray-700 border rounded-lg py-2 shadow hover:shadow-md transition">
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-2 shadow hover:shadow-md transition">
                        <FaFacebook className="text-xl" />
                        Continue with Facebook
                    </button>
                </div>

                {/* No account yet */}
                <p className="mt-6 text-sm text-neutral-400 text-center">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
