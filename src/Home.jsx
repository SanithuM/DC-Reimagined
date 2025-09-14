import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Full DC Reimagined homepage with draggable comics carousel and animated character cards
export default function DCReimaginedHome() {
  const characters = [
    { name: "Batman", tag: "Gotham's Dark Knight", img: "https://i.pinimg.com/736x/f8/38/55/f838555db36642a58f66b16bbf74ba04.jpg" },
    { name: "Wonder Woman", tag: "Amazonian Warrior", img: "https://i.pinimg.com/736x/ab/53/d3/ab53d34c55419c5cd3dfc86a6af85ea1.jpg" },
    { name: "Superman", tag: "Man of Steel", img: "https://i.pinimg.com/1200x/94/c7/e9/94c7e9ccb6f016d550a1227fc54ef7dd.jpg" },
    { name: "The Flash", tag: "Fastest Man Alive", img: "https://i.pinimg.com/1200x/ed/15/0f/ed150f163a40ba47d00b5389689ef4f3.jpg" },
    { name: "Black Canary", tag: "Sonic Scream", img: "https://i.pinimg.com/1200x/c7/5a/8d/c75a8de5667f750aab008e16ae3f87aa.jpg" },
    { name: "Aquaman", tag: "King of Atlantis", img: "https://i.pinimg.com/736x/4e/51/a3/4e51a37aa5a1745c075809b1af6a9d15.jpg" },
    { name: "Hawkgirl", tag: "Winged Warrior", img: "https://i.pinimg.com/736x/9a/8a/cc/9a8accfe1b05016b408c7fa4c2988c97.jpg" },
    { name: "Cyborg", tag: "Half man half machine", img: "https://i.pinimg.com/736x/cc/2c/bd/cc2cbd6ce99ae800ed7b8987fc473674.jpg" },
    { name: "Batgirl", tag: "Batman's Sidekick", img: "https://i.pinimg.com/736x/86/2a/6e/862a6ecd0a23b778717ad2aad932c68e.jpg" },
  ];

  const comics = [
    { title: "Absolute Batman", cover: "https://m.media-amazon.com/images/I/81zvkA-SRiL._UF1000,1000_QL80_.jpg" },
    { title: "Absolute Superman", cover: "https://m.media-amazon.com/images/I/81cX7KG-MkL._UF1000,1000_QL80_.jpg" },
    { title: "Absolute Wonder Women", cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8504225.jpg?1748611071" },
    { title: "Absolute Flash", cover: "https://static.dc.com/2025-03/AB_FLS_Cv1_00111_DIGITAL.jpg" },
    { title: "Absolute Green Lantern", cover: "https://static.dc.com/2025-04/ABS_GL_Cv1_00111_DIGITAL.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-neutral-100">
      <Navbar />
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            The World’s Greatest <span className="text-blue-400">Super Heroes</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Discover the mythos of the Justice League and beyond — reimagined for a modern experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#characters"
              className="rounded-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Explore Characters
            </a>
            <a
              href="#comics"
              className="rounded-full px-6 py-3 border border-neutral-700 bg-neutral-900/40 text-white font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Latest Comics
            </a>
          </div>
        </motion.div>

      </section>


      {/* Characters strip */}
      <section id="characters" className="py-8">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h2 className="text-2xl font-bold">Character Spotlight</h2>
          <p className="text-neutral-400 mt-1 text-sm">A rotating selection of featured characters and origin mini-documentaries.</p>
        </div>

        {/* Auto-scrolling container */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ['0%', '-100%'], // Animate from start to end
            }}
            transition={{
              ease: 'linear',
              duration: 30, // Adjust duration to control speed
              repeat: Infinity,
            }}
          >
            {/* We duplicate the characters array to create a seamless loop */}
            {[...characters, ...characters].map((c, index) => (
              <motion.article
                key={`${c.name}-${index}`}
                className="relative group rounded-xl overflow-hidden h-80 w-60 md:w-64 flex-shrink-0"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {/* Background Image */}
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay and text content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                  <p className="text-sm text-neutral-300">{c.tag}</p>
                  {/* Buttons appear on hover */}
                  <div className="mt-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a className="text-xs px-3 py-1 rounded-full border border-neutral-500 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-colors" href="/comics">Read</a>
                    <a className="text-xs px-3 py-1 rounded-full border border-neutral-500 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-colors" href="#">Watch</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comics draggable carousel */}
      <section id="comics" className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest Issues</h2>
          <a href="/comics" className="text-sm text-neutral-400">View all</a>
        </div>

        <motion.div className="mt-6 flex gap-6 overflow-hidden cursor-grab" whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ left: -800, right: 0 }} className="flex gap-6">
            {comics.map((c, i) => (
              <div key={i} className="min-w-[260px] flex-shrink-0">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={c.cover}
                    alt={c.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="mt-2 text-sm text-neutral-300">{c.title}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}