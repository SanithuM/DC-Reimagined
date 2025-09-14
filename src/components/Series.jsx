import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MoviesPage() {

  const trailers = [
    {
      title: "Peacemaker – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/f6AZTfI54OU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDDRsXE_Iz0EoFBkQLjoFsZCuhkpA",
      link: "https://www.youtube.com/watch?v=f6AZTfI54OU",
    },
    {
      title: "Suicide Squad ISEKAI – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/lsLAMV7lQX4/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=lsLAMV7lQX4",
    },
    {
      title: "Kite Man: Hell Yeah! – Official Trailer",
      thumbnail:
        "https://i.ytimg.com/vi/HnHKPjTUdOs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAo-lkf7Nk9kCMdsigG4148iocRrA",
      link: "https://www.youtube.com/watch?v=HnHKPjTUdOs",
    },
  ];

  const categories = [
    {
      name: "FROM THE PAGES OF DC VERTIGO",
      movies: [
        { title: "SWEET TOOTH", cover: "https://static.dc.com/2024-06/TVPage_Thumb_SweetTooth_S3_Clean.jpg?w=640" },
        { title: "DEAD BOY DETECTIVES", cover: "https://static.dc.com/2024-04/TVPage_Thumb_DBD_.jpg?w=640" },
        { title: "THE SANDMAN", cover: "https://static.dc.com/dc/files/default_images/TVPage_Thumb_SandmanNflx_alt_62e850104e8e39.24666369.jpg?w=384" },
        { title: "LUCIFER", cover: "https://static.dc.com/dc/files/default_images/TVPage_Thumb_Lucifer_S6_61143ca6cd6325.61326919.jpg?w=384" },
        { title: "DMZ", cover: "https://static.dc.com/dc/files/default_images/TVPage_Thumb_DMZ_6233996bc79a47.52163293.jpg?w=384" },

      ],
    },
    {
      name: "FUN FOR THE WHOLE FAMILY",
      movies: [
        { title: "MY ADVENTURES WITH SUPERMAN", cover: "https://static.dc.com/2024-06/TVPage_Thumb_MyAdvSuperman_S2_.jpg?w=640" },
        { title: "BATWHEELS", cover: "https://static.dc.com/dc/files/default_images/BatwheelsTVPage_Thumb__634e1784ee2eb7.72883188.jpg?w=384" },
        { title: "TEEN TITANS GO!", cover: "https://static.dc.com/dc/files/default_images/teentitansgo_s1_thumb_192x291_52abc1c8962e81.49398578.jpg?w=192" },
        { title: "DC SUPER HERO GIRLS", cover: "https://static.dc.com/dc/files/default_images/TVPage_Thumb_DCSHG_5c7f2fb9c01807.57323633.jpg?w=384" },
        { title: "BATMAN: THE BRAVE AND THE BOLD", cover: "https://static.dc.com/dc/files/default_images/batmanbraveandbold_s1_thumb_192x291_52abc76d36d9c4.68803337.jpg?w=192" },
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
          src="https://static.dc.com/2025-02/Peacemaker%20Presents%20Banner.jpg"
          alt="peacemaker Banner"
          className="w-full h-[300px] md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl md:text-6xl font-extrabold">PEACEMAKER</h2>
          <p className="mt-4 max-w-2xl text-neutral-200">
            The new original series PEACEMAKER, starring John Cena, is now streaming on HBO Max. 
          </p>
          <a
            href="#featured-video"
            className="mt-6 rounded-full px-8 py-2 border border-neutral-700 bg-white text-black font-semibold hover:bg-blue-500 hover:text-white transition-colors"
          >
            Watch Now
          </a>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Video */}
        <div className="w-full">
          <iframe
            className="w-140 h-80 rounded-lg"
            src="https://www.youtube.com/embed/0CsuJoumqAk?si=BfiU2km8qNArkTHT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col justify-between w-full text-left">
          <p className="text-xl text-white font-semibold mb-6">Featuerd Video</p>
          <h3 className="text-xl md:text-2xl font-bold mb-4">CREATURE COMMANDOS – OFFICIAL TRAILER</h3>
          <p className=" text-neutral-300">
            You wanted monsters? You got motherf*ckin’ monsters. From James Gunn, comes the new DC Studios and Max Original Series CreatureCommandos. Streaming December 5th, exclusively on Max.
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
