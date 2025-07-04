import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Sophia Lee",
    role: "Athlete",
    image: "https://i.pravatar.cc/150?img=1",
    message:
      "Joining PlayPulse transformed my game. The community and training tools are unmatched!",
  },
  {
    name: "Daniel Kim",
    role: "Coach",
    image: "https://i.pravatar.cc/150?img=2",
    message:
      "The testimonials are real—this is where champions grow. Highly recommended!",
  },
  {
    name: "Emily Chen",
    role: "Enthusiast",
    image: "https://i.pravatar.cc/150?img=3",
    message:
      "A fantastic platform for discovering new sports and connecting with fellow enthusiasts.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

export function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative py-16  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-base-300 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-center text-primary mb-12"
          data-aos="fade-down"
        >
          🌟 What Our Users Say
        </h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 40px 0 rgba(0, 255, 255, 0.2)",
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
              className="transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
                <p className="text-lg text-neutral font-medium leading-relaxed mb-6 flex-grow">
                  "{t.message}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-cyan-300 shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          className="text-yellow-400 text-base"
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-primary">
                      {t.name}
                    </h3>
                    <p className="text-sm text-cyan-200 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonial;
