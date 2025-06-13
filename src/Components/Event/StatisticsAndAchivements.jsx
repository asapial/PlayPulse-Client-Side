import React from "react";
import { FaTrophy, FaUsers, FaCalendarAlt, FaMedal } from "react-icons/fa";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    icon: <FaCalendarAlt className="text-yellow-400 w-12 h-12 drop-shadow" />,
    label: "Events Hosted",
    desc: "Exciting events organized for our community.",
    value: 120,
  },
  {
    id: 2,
    icon: <FaUsers className="text-cyan-400 w-12 h-12 drop-shadow" />,
    label: "Active Members",
    desc: "Vibrant users engaging every day.",
    value: 5000,
  },
  {
    id: 3,
    icon: <FaTrophy className="text-pink-400 w-12 h-12 drop-shadow" />,
    label: "Championship Titles",
    desc: "Prestigious championships won by our teams.",
    value: 35,
  },
  {
    id: 4,
    icon: <FaMedal className="text-green-400 w-12 h-12 drop-shadow" />,
    label: "Medals Awarded",
    desc: "Honors and medals earned by our athletes.",
    value: 142,
  },
];

export function StatisticsAndAchivements() {
  return (
    <section className="relative   py-20 px-4 md:px-16 rounded-3xl shadow-2xl max-w-7xl mx-auto my-16 overflow-hidden">
      {/* Decorative blurred gradient */}
      {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div> */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center drop-shadow-lg text-primary">
          PlayPulse by the Numbers
        </h2>
        <p className="text-center text-lg md:text-xl text-neutral mb-14 max-w-2xl mx-auto">
          Discover our journey of excellence and the milestones achieved by our
          passionate community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {statsData.map(({ id, icon, label, value, desc }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center space-y-4 bg-white/10 backdrop-blur-xl border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-400/30 shadow-lg rounded-2xl p-8 transition-all duration-300 group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <span className="text-5xl font-extrabold text-secondary drop-shadow">
                <CountUp end={value} duration={2} separator="," />
              </span>
              <p className="text-xl font-bold text-neutral">{label}</p>
              <p className="text-base text-secondary">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsAndAchivements;
