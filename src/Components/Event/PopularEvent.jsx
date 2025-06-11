import React from 'react';
import { motion } from "framer-motion";
import { FaBasketballBall, FaFutbol, FaSwimmer, FaTableTennis, FaVolleyballBall, FaRunning } from "react-icons/fa";

const sports = [
  {
    name: "Basketball",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    icon: <FaBasketballBall className="text-orange-400 text-3xl" />,
    desc: "Fast-paced team sport with slam dunks and 3-pointers.",
  },
  {
    name: "Soccer",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    icon: <FaFutbol className="text-green-400 text-3xl" />,
    desc: "The world’s most popular game, played with skill and passion.",
  },
  {
    name: "Swimming",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    icon: <FaSwimmer className="text-cyan-400 text-3xl" />,
    desc: "Dive in for speed, endurance, and aquatic fun.",
  },
  {
    name: "Table Tennis",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=600&q=80",
    icon: <FaTableTennis className="text-pink-400 text-3xl" />,
    desc: "Lightning-fast reflexes and precision at the table.",
  },
  {
    name: "Volleyball",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    icon: <FaVolleyballBall className="text-yellow-400 text-3xl" />,
    desc: "Jump, spike, and block in this exciting net sport.",
  },
  {
    name: "Running",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    icon: <FaRunning className="text-red-400 text-3xl" />,
    desc: "Test your speed and stamina on the track.",
  },
];

export function PopularEvent() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 min-h-screen  text-white p-8 flex flex-col justify-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        🏅 Popular Sports at PlayPulse
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10  mx-auto">
        {sports.map((sport, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Animated border */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 blur-lg transition duration-500"></div>
            {/* Card content */}
            <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col h-full shadow-lg border border-slate-700 group-hover:border-cyan-400 transition">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-48 object-cover object-center rounded-t-3xl border-b border-slate-800"
              />
              <div className="p-6 flex flex-col items-center text-center gap-2">
                <div className="mb-2">{sport.icon}</div>
                <h3 className="text-2xl font-bold text-cyan-300">{sport.name}</h3>
                <p className="text-base text-slate-300">{sport.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PopularEvent;