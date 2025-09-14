import React from "react";
import { motion } from "framer-motion";
import NavBar from "./Navbar";
import Footer from "./Footer";


export default function ComicsPage() {
  const categories = [
    {
      name: "Batman",
      comics: [
        { title: "Absolute Batman", cover: "https://m.media-amazon.com/images/I/81zvkA-SRiL._UF1000,1000_QL80_.jpg" },
        { title: "Batman: Year One", cover: "https://static.dc.com/2024-03/Batman-Essential-Year-One.jpg" },
        { title: "Batman - The Red Death", cover: "https://static.dc.com/dc/files/default_images/BMRD_01_300-001_HD_5b7f1d5c7d1073.56026137.jpg" },
        { title: "Batman Rebirth", cover: "https://static.dc.com/2024-03/Batman-Essential-Rebirth.jpg" },
        { title: "Batman The Killing Joke", cover: "https://m.media-amazon.com/images/I/91OjBx3hSNL._UF894,1000_QL80_.jpg" },
        { title: "Batman & Robin", cover: "https://i1.whakoom.com/large/15/20/8e3e1a9d060841be98c228ab645fdc6e.jpg" },

      ],
    },
    {
      name: "Superman",
      comics: [
        { title: "Absolute Superman", cover: "https://m.media-amazon.com/images/I/81cX7KG-MkL._UF1000,1000_QL80_.jpg" },
        { title: "Superman for Tomorrow", cover: "https://preview.redd.it/what-is-the-best-superman-comic-for-a-beginner-v0-4qdxtn62l18b1.jpg?width=640&crop=smart&auto=webp&s=8ed45556d437b326c448693a952ca4faf4a21be8" },
        { title: "Superman: Birthright", cover: "https://cdn2.penguin.com.au/covers/original/9781799501916.jpg" },
        { title: "Superman: The New 52", cover: "https://m.media-amazon.com/images/I/81zbEJcsCXL._UF1000,1000_QL80_.jpg" },
        { title: "Superman / Batman", cover: "https://dyn.media.forbiddenplanet.com/cQpZKmYnqDAaZTEtX17YLh5NlrM=/fit-in/1500x1500/https://media.forbiddenplanet.com/products/8e/ac/46e212564a8f930042f1687b9c71e544088d.jpg" },
        { title: "Superman Red Son", cover: "https://m.media-amazon.com/images/I/81zJdVSrwoL._UF1000,1000_QL80_.jpg" },
      ],
    },
    {
      name: "Wonder Woman",
      comics: [
        { title: "Absolute Wonder Woman", cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-8504225.jpg?1748611071" },
        { title: "Wonder Woman", cover: "https://comichub.blob.core.windows.net/high/7066840a-3e2b-4e00-90ef-e24a6685e5ee.jpg" },
        { title: "The Hiketeia", cover: "https://m.media-amazon.com/images/I/81CcsKJ+PSL._UF1000,1000_QL80_.jpg" },
        { title: "Wonder Women New 52", cover: "https://comicsrus.com.au/cdn/shop/products/9A17DB10-1800-4465-8D72-200CE1DADC9C_1024x1024.jpg?v=1592372779" },
        { title: "Superman Wonder Women", cover: "https://www.coffeeandheroes.com/wp-content/uploads/2023/03/1BEEEEAD-EF90-41C4-9CDD-B773E7C2DE18.jpeg" },
        { title: "Sensational Wonder Woman", cover: "https://m.media-amazon.com/images/I/81tmeDf2AfL._UF1000,1000_QL80_.jpg" },
      ],
    },
    {
      name: "Justice League",
      comics: [
        { title: "Justice League: The Darkseid War", cover: "https://m.media-amazon.com/images/I/91t1zOx7YhL._UF1000,1000_QL80_.jpg" },
        { title: "Justice League Unlimited", cover: "https://m.media-amazon.com/images/I/91TmWxDxT7L._UF1000,1000_QL80_.jpg" },
        { title: "Justice League Red", cover: "https://m.media-amazon.com/images/I/81uGAEPPAwL._UF1000,1000_QL80_.jpg" },
        { title: "JLA: The Tower of Babel", cover: "https://m.media-amazon.com/images/I/91aPunU9HjL._UF1000,1000_QL80_.jpg" },
        { title: "Justice League Dark", cover: "https://m.media-amazon.com/images/I/81rbs-5FD2L._UF1000,1000_QL80_.jpg" },
        { title: "Justice League: Origin", cover: "https://m.media-amazon.com/images/I/81XsrhVxPyL._UF1000,1000_QL80_.jpg" },
      ],
    },
  ];



  return (


    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-neutral-100 px-6 py-2">
      <NavBar />
      <br />
      <br />
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
        <img
          src="https://static.dc.com/2025-09/2025_09_03_MattFractionInterview_Marquee_3x1.jpg?w=1200"
          alt="DC Comics Hero Banner"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Dive Into the DC Universe</h2>
          <p className="mt-2 text-sm md:text-lg text-neutral-300">
            Explore iconic characters, epic storylines, and legendary series.
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Available Comics</h1>

      {/* Categories */}
      {categories.map((category, idx) => (
        <section key={idx} className="max-w-7xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <a href="#shop" className="text-sm text-neutral-400 hover:text-white">View all</a>
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
              {category.comics.map((c, i) => (
                <div key={i} className="min-w-[220px] flex-shrink-0">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={c.cover}
                      alt={c.title}
                      className="w-full h-72 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-2 text-sm text-neutral-300">{c.title}</div>
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


