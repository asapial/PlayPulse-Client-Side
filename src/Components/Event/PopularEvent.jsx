import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
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

// Framer Motion variants for container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(0,255,255,0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
    transition: { type: "spring", stiffness: 300, damping: 18 }
  }
};

export function PopularEvent() {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-10 px-4  text-primary p-8 flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        🏅 Popular Sports at <Playpulsenameplate />
      </motion.h2>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              variants={cardVariants}
              whileHover="hover"
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-400/30 shadow-lg transition-all duration-300"
              layout
            >
              <motion.img
                src={sport.image}
                alt={sport.name}
                className="w-full h-48 object-cover object-center rounded-t-3xl border-b border-slate-800 group-hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
              <motion.div
                className="p-6 flex flex-col items-center text-center gap-2 bg-gradient-to-t from-base-100 to-base-300/50 h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <motion.div
                  className="mb-2"
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  {sport.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary">{sport.name}</h3>
                <p className="text-neutral">{sport.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default PopularEvent;