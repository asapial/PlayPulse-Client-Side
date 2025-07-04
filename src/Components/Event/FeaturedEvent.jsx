
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Playpulsenameplate from '../../Atoms/Playpulsenameplate';

const FeaturedEvent = () => {
  const event = {
    name: "Annual Athletics Championship",
    date: "August 15, 2024",
    location: "Grand Stadium, Metro City",
    image: "https://i.ibb.co/Gf78FBkC/springting-track-5.png",
    description: "Experience the thrill of peak athletic performance at the most anticipated event of the year. Witness top athletes compete for glory in a series of challenging events.",
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-primary flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        🌟 Featured Event at <Playpulsenameplate />
      </motion.h2>
      <motion.div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.02, boxShadow: "0 12px 40px 0 rgba(0,255,255,0.2)" }}
      >
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-primary mb-4">{event.name}</h3>
          <div className="flex items-center text-neutral mb-2">
            <FaCalendarAlt className="mr-2 text-cyan-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-neutral mb-4">
            <FaMapMarkerAlt className="mr-2 text-cyan-400" />
            <span>{event.location}</span>
          </div>
          <p className="text-lg text-neutral mb-6">{event.description}</p>
          <motion.button
            className="self-start bg-cyan-500 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-lg hover:bg-cyan-600 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedEvent;
