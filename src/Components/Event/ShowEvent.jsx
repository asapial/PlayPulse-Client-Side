import React, { useEffect, useState } from "react";
import DataCard from "../../Atoms/DataCard";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import Playpulsebutton from "../../Atoms/Playpulsebutton";
import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const ShowEvent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://play-pulse-server.vercel.app/showSixData")
      .then((res) => res.json())
      .then((fetchData) => {
        setData(fetchData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Skeleton Card UI
  const SkeletonCard = () => (
    <div className="bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col w-[330px] h-[440px]">
      <div className="relative h-110 overflow-hidden group rounded-2xl">
        {/* Image */}
        <img
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Event Info Overlay */}
        <div className="absolute inset-0 bg-black/50 text-white p-4 flex flex-col justify-end gap-2">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <FaTag className="text-pink-400" /> 
          </h3>
          <p className="text-sm flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" /> 
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-400" />{" "}

          </p>
          <p className="text-sm">
            <span className="font-semibold">Type:</span> 
          </p>
        </div>

        {/* Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="px-5 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white font-semibold rounded-xl shadow-lg transition-transform hover:scale-105"
          >

          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl py-10 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-2">
        <Typewriter
          words={[
            "Discover Exclusive Events ✨",
            "Book. Attend. Enjoy.",
            "Unforgettable Moments Await!",
            "Events Curated for You 🧠",
            "Level Up Your Life 🚀",
            "Where Passion Meets Purpose ❤️",
            "Experience. Explore. Elevate.",
            "One Click Away from Amazing!",
            "Join. Learn. Thrive.",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={500}
        />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : data.length > 0
          ? data.map((item, index) => (
              <DataCard data={item} key={item._id || index} />
            ))
          : (
            <div className="col-span-full text-center text-gray-400 py-8">
              No events found.
            </div>
          )}
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 mx-auto my-5">
        <Link to={"/showEventData/All"}>
          <Playpulsebutton>Show All</Playpulsebutton>
        </Link>
      </div>
    </section>
  );
};

export default ShowEvent;
