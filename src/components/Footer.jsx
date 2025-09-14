import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-neutral-800/60 bg-gradient-to-b from-black/40 to-black/80">
            <div className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-3">
                {/* Logo + description */}
                <div>
                    <div className="text-3xl font-extrabold tracking-tight">
                        DC<span className="text-blue-400">Re</span>
                    </div>
                    <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
                        A reimagined concept site showcasing better design, accessibility,
                        and content flow. Built for fans, by fans.
                    </p>
                </div>

                {/* Explore + Legal grouped */}
                <div className="flex gap-12">
                    <div>
                        <h4 className="text-neutral-200 font-semibold mb-4">Explore</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            {["Home", "Comics", "Videos", "News", "Shop"].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-neutral-200 font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            {["Terms of Use", "Privacy Policy", "Cookie Settings"].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-neutral-200 font-semibold mb-4">
                        Join Our Newsletter
                    </h4>
                    <p className="text-sm text-neutral-400 mb-4 max-w-sm">
                        Stay updated with the latest DC news, comics, and features.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg bg-neutral-900 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        />
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800/60">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                    <p>
                        © {new Date().getFullYear()} DC Reimagined — Concept project. All
                        rights belong to their respective owners.
                    </p>
                    <div className="flex gap-5 mt-3 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="hover:text-red-500 transition-colors duration-300">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
