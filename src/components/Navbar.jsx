import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef(null);

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdownWithDelay = (delay = 120) => {
    
    closeTimeout.current = setTimeout(() => setDropdownOpen(false), delay);
  };

  const toggleDropdown = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      openDropdown();
    }
  };

  const onKeyDownToggle = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  return (
    <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-extrabold tracking-tight">
          DC<span className="text-blue-400">Re</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm opacity-90 items-center">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/comics">Comics</Link>

          {/* Movies & TV Dropdown wrapper */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={() => closeDropdownWithDelay(120)}
          >
            <button
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
              onKeyDown={onKeyDownToggle}
              className="flex items-center gap-1 hover:text-white focus:outline-none"
            >
              Movies &amp; TV
              <span className="opacity-80">▾</span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-2 w-44 bg-neutral-900 shadow-lg rounded-lg overflow-hidden z-50 pointer-events-auto"
                  onMouseEnter={openDropdown}
                  onMouseLeave={() => closeDropdownWithDelay(50)}
                >
                  <Link
                    to="/movies"
                    className="block px-4 py-2 text-sm hover:bg-neutral-800"
                    onClick={() => setDropdownOpen(false)}
                  >
                    DC Movies
                  </Link>
                  <Link
                    to="/series"
                    className="block px-4 py-2 text-sm hover:bg-neutral-800"
                    onClick={() => setDropdownOpen(false)}
                  >
                    DC Series
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className="hover:text-white" to="/news">News</Link>
          <a className="hover:text-white" href="#">Shop</a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-neutral-900/40 backdrop-blur rounded-lg px-3 py-1 gap-2">
          <Search size={16} />
          <input
            aria-label="Search"
            placeholder="Search heroes, comics..."
            className="bg-transparent outline-none text-sm"
          />
        </div>

        <button className="md:hidden p-2 rounded-lg bg-neutral-900/30">
          <Menu size={18} />
        </button>

        <Link
          to="/signup"
          className="ml-2 inline-block rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-black"
        >
          Sign Up
        </Link>

        <Link
          to="/login"
          className="ml-1 inline-block rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-black"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}
