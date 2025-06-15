import React from 'react';
import { motion } from "framer-motion";
// import { FaBasketballBall, FaFutbol, FaSwimmer, FaTableTennis, FaVolleyballBall, FaRunning } from "react-icons/fa";
import Playpulsenameplate from '../../Atoms/Playpulsenameplate';

import { FaSwimmer, FaRunning, FaLongArrowAltRight, FaArrowUp, FaWater, FaDumbbell } from "react-icons/fa";

const sports = [
  {
    name: "Swimming",
    image: "https://i.ibb.co/4g5fjCV4/swimming-pool-4.png",
    icon: <FaSwimmer className="text-cyan-400 text-3xl" />,
    desc: "Dive into competitive swimming events and showcase your aquatic skills.",
  },
  {
    name: "Sprinting",
    image: "https://i.ibb.co/Gf78FBkC/springting-track-5.png",
    icon: <FaRunning className="text-orange-400 text-3xl" />,
    desc: "Test your speed and agility in thrilling sprint races.",
  },
  {
    name: "Long Jump",
    image: "https://i.ibb.co/KxKt7KY0/long-jump-2.png",
    icon: <FaLongArrowAltRight className="text-yellow-500 text-3xl" />,
    desc: "Leap for distance and compete in long jump events.",
  },
  {
    name: "High Jump",
    image: "https://i.ibb.co/ccd2g094/high-jump-2.png",
    icon: <FaArrowUp className="text-green-500 text-3xl" />,
    desc: "Show your vertical prowess in high jump competitions.",
  },
  {
    name: "Water-Polo",
    image: "https://i.ibb.co/3Y8pCtZX/water-polo-1.png",
    icon: <FaWater className="text-blue-500 text-3xl" />,
    desc: "Join the excitement of water-polo and compete in the pool.",
  },
  {
    name: "Fencing",
    image: "https://i.ibb.co/nM5jCwnx/fencing-1.png",
    icon: <FaDumbbell className="text-purple-500 text-3xl" />,
    desc: "Engage in strategic duels and master the art of fencing.",
  },
];

export function PopularEvent() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 min-h-screen  text-primary p-8 flex flex-col justify-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-">
        🏅 Popular Sports at <Playpulsenameplate></Playpulsenameplate>
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

            {/* Card content */}
            <div className="relative  rounded-3xl overflow-hidden flex flex-col h-full shadow-lg border border-slate-700 border-b-8 border-b-cyan-900 group-hover:border-cyan-400 transition">
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-48 object-cover object-center rounded-t-3xl border-b border-slate-800"
              />
              <div className="p-6 flex flex-col items-center text-center gap-2  bg-gradient-to-t from-base-100 to-base-300/50 h-full ">
                <div className="mb-2">{sport.icon}</div>
                <h3 className="text-2xl font-bold text-primary">{sport.name}</h3>
                <p className="text-neutral ">{sport.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PopularEvent;