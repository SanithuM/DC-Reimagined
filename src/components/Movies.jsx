import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MoviesPage() {

  const trailers = [
    {
      title: "SHAZAM! FURY OF THE GODS – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/IsVDz3N8sBc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=ugk6vSxV7rU",
    },
    {
      title: "Blue Beetle – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/-XQ5PQ9V2io/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=vS3_72Gb-bI",
    },
    {
      title: "The Flash – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/LmH94N-untw/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=hebWYacbdvc",
    },
  ];

  const categories = [
    {
      name: "BIG SCREEN, BIGGER HEROES",
      movies: [
        { title: "AQUAMAN AND THE LOST KINGDOM", cover: "https://static.dc.com/2023-12/Movies_Thumb_AquamanTheLostKingdom_1222.jpg?w=640" },
        { title: "BLUE BEETLE", cover: "https://static.dc.com/2023-07/Movies_Thumb_BlueBeetle_Txtd_Main_1sht_REV_BLBTL.jpg?w=640" },
        { title: "THE FLASH", cover: "https://static.dc.com/2023-05/Movies_Thumb_TheFlash.jpg?w=640" },
        { title: "SHAZAM! FURY OF THE GODS", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_ShazamFotG_202301b_63d1cc24bb80d1.18727093.jpg?w=384" },
        { title: "BLACK ADAM", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_BlackAdam_1012_63478cad000886.65212101.jpg?w=384" },
        { title: "THE BATMAN", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_TheBatman_2_6205b82ee37268.37925455.jpg?w=384" },

      ],
    },
    {
      name: "ANIMATED ADVENTURES",
      movies: [
        { title: "Batman: Soul of the Dragon", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_BatmanSouloftheDragon_v2_5ffd1e4348ae06.70722632.jpg?w=384" },
        { title: "Merry Little Batman", cover: "https://static.dc.com/2023-12/Movies_Thumb_MerryLittleBatman_.jpg?w=640" },
        { title: "Justice League: Warworld", cover: "https://static.dc.com/2023-07/Movies_Thumb_JLwarworld_.jpg?w=640" },
        { title: "Justice League: Crisis on Infinite Earths", cover: "https://static.dc.com/2024-01/Movies_Thumb_COIE_I_.jpg?w=640" },
        { title: "Legion of Super-Heroes", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_Gallery_20230214_LegionOfSH_63ddeafacaddc9.16918857.jpg?w=384" },
        { title: "Batman Ninja", cover: "https://static.dc.com/dc/files/default_images/Movies-Thumb_BatmanNinja_5ad5684daef4b5.53492614.jpg?w=192" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-neutral-100">
      <Navbar />
      <br />
      <br />
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
        <img
          src="https://i.redd.it/new-superman-poster-banner-in-a-clean-version-v0-g24uo9ysrr0f1.jpg?width=3000&format=pjpg&auto=webp&s=245c5615a4690e553517da7d680c1d75d3f61d74"
          alt="Superman Banner"
          className="w-full h-[300px] md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl md:text-6xl font-extrabold">SUPERMAN</h2>
          <p className="mt-4 max-w-2xl text-neutral-200">
            The Man of Steel returns in an all-new era of hope, justice, and
            strength.
          </p>
          <a
            href="#featured-video"
            className="mt-6 rounded-full px-8 py-2 border border-neutral-700 bg-white text-black font-semibold hover:bg-blue-500 hover:text-white transition-colors"
          >
            Get Tickets
          </a>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Video */}
        <div className="w-full">
          <iframe
            className="w-140 h-80 rounded-lg"
            src="https://www.youtube.com/embed/-bd_AUSkrRA?si=YP7p6YMS9vS8KJ9z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col justify-between w-full text-left">
          <p className="text-xl text-white font-semibold mb-6">Featuerd Video</p>
          <h3 className="text-xl md:text-2xl font-bold mb-4">AZTEC BATMAN: CLASH OF EMPIRES – OFFICIAL TRAILER</h3>
          <p className=" text-neutral-300">
            A bold reimagining of the Batman legend set within the vibrant and fierce culture of 16th century Mesoamerica. Aztec Batman: Clash of Empires is coming soon to digital!
          </p>
        </div>
      </div>

      {/* New Trailers Section */}
      <section id="trailers" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">New Trailers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trailers.map((t, i) => (
            <motion.a
              key={i}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={t.thumbnail}
                alt={t.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={48} className="text-white drop-shadow-lg" />
              </div>
              <div className="p-4 bg-neutral-900">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {t.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              View all
            </a>
          </div>

          <motion.div
            className="flex gap-6 overflow-hidden cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: -800, right: 0 }}
              className="flex gap-6"
            >
              {category.movies.map((m, i) => (
                <div key={i} className="min-w-[220px] flex-shrink-0">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={m.cover}
                      alt={m.title}
                      className="w-full h-72 object-fit hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-2 text-sm text-neutral-300">{m.title}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
