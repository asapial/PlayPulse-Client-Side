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
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4  relative flex items-center justify-center  overflow-hidden ">
      <div className=" w-full">
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-center text-primary mb-5"
          data-aos="fade-down"
        >
          🌟 What Our Users Say
        </h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="rounded-3xl shadow-2xl p-8 border border-sky-100 hover:border-primary/30 hover:shadow-primary/20 transition">
                <div className="flex gap-5 items-start">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-sky-200 shadow"
                  />
                  <div className="flex-1">
                    <FaQuoteLeft className="text-sky-300 text-2xl mb-2" />
                    <p className="text-lg text-slate-700 font-medium leading-relaxed mb-4">
                      "{t.message}"
                    </p>
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar
                          key={idx}
                          className="text-yellow-400 text-base"
                        />
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-primary">
                      {t.name}
                    </h3>
                    <p className="text-sm text-slate-500">{t.role}</p>
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