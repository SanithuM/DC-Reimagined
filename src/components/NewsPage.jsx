import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function NewsPage() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const news = [
        { title: "DC Announce Batman/Static: Beyond", img: "https://static.dc.com/2025-08/Batman-Static-Beyond-1-OTO-Nguyen.jpg" },
        { title: "Superman The Kryptonite Spectrum Second Printing", img: "https://static.dc.com/2025-08/Superman-The-Kryptonite-Spectrum-1-%E2%80%94-Second-Printing.jpg" },
        { title: "Warner Bros. Animation and DC Studios Announce Series Greenlight for Mister Miracle", img: "https://static.dc.com/2025-06/WBA_MisterMiracle_Annecy_Final.jpg" },
        { title: "DC Comics goes all in with Absolute Evil this october", img: "https://static.dc.com/2025-07/Absolute-Batman-Annual-1-Main-Johnson.jpg" },
        { title: "Batman Returns with a New Adventure", img: "https://static.dc.com/2025-07/Absolute-Batman-Annual-1-Main-Johnson.jpg" },
        { title: "Wonder Woman's Legacy Continues", img: "https://static.dc.com/2025-07/Absolute-Batman-Annual-1-Main-Johnson.jpg" },
    ];

    const features = [
        { title: "Black Canary: Best of The Best Settles the Question Once and For All", img: "https://static.dc.com/2025-09/20250912_DC_News_BlackCanaryCov.jpg" },
        { title: "The Real Jason Todd: A Red Hood Reading Guide", img: "https://static.dc.com/2025-09/redhood_readlingList_3x1.png?w=1200" },
        { title: "Superman Sequel Coming to Theaters in 2027", img: "https://static.dc.com/2025-09/20250903_DC_News_ManOfTomorrowAnn_Marquee.jpg?w=1200" },
        { title: "No Ordinary Bat: Five Dramatically Different Dark Knights", img: "https://static.dc.com/2025-09/2025_09_04_DramaticallyDifferentDarkKnights_Marquee_3x1.jpg?w=1200" },
        { title: "Music in the Key of DC", img: "https://static.dc.com/2025-08/20250828_DC_News_BraveAndTheBold.jpg" },
        { title: "School's in Session: Who's the Best Mentor in the DC Universe?", img: "https://static.dc.com/2025-08/20250829_DC_News_Wildcat.jpg" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-neutral-100">
            <Navbar />
            <br />
            <br />
            {/* Hero Banner */}
            <section
                className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://static.dc.com/2025-09/2025_09_05_ATQ_Marquee_3x1.jpg?w=1200')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-4xl md:text-6xl font-extrabold text-white z-10">
                    DC News Hub
                </h1>
            </section>

            {/* Official DC News */}
            <section className="max-w-7xl mx-auto px-6 py-12 relative">
                <h2 className="text-3xl font-bold mb-6">Official DC News</h2>

                {/* Arrows */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-800 p-3 rounded-full hover:bg-neutral-700"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-800 p-3 rounded-full hover:bg-neutral-700"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                >
                    {news.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[280px] bg-neutral-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex-1 flex items-center justify-center">
                                <h3 className="font-semibold text-center text-base line-clamp-3">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features, Columns, Interviews and More */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-6">
                    Features, Columns, Interviews and More
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            {/* Card with hover lift + shadow */}
                            <div className="h-56 w-full overflow-hidden rounded-xl bg-neutral-900 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Title below card */}
                            <h3 className="mt-3 font-semibold text-lg text-center line-clamp-2">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );


}
