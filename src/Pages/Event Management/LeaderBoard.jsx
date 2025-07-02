import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import trophyAnimation from "../../assets/LottiAnimation/trophy.json"; // You need a trophy Lottie file

const leaderboardData = [
  {
    id: 1,
    name: "Zara Khan",
    email: "zara@example.com",
    photo: "https://i.pravatar.cc/150?img=1",
    points: 980,
  },
  {
    id: 2,
    name: "Ayan Chowdhury",
    email: "ayan@example.com",
    photo: "https://i.pravatar.cc/150?img=2",
    points: 850,
  },
  {
    id: 3,
    name: "Tanisha Rahman",
    email: "tanisha@example.com",
    photo: "https://i.pravatar.cc/150?img=3",
    points: 820,
  },
  {
    id: 4,
    name: "Samiul Alam",
    email: "samiul@example.com",
    photo: "https://i.pravatar.cc/150?img=4",
    points: 760,
  },
  {
    id: 5,
    name: "Mehzabien Nahar",
    email: "mehzabien@example.com",
    photo: "https://i.pravatar.cc/150?img=5",
    points: 710,
  },
];

const getMedalColor = (rank) => {
  switch (rank) {
    case 1:
      return "bg-yellow-400 text-yellow-900";
    case 2:
      return "bg-gray-300 text-gray-800";
    case 3:
      return "bg-amber-600 text-white";
    default:
      return "bg-blue-100 text-blue-900";
  }
};

const Leaderboard = () => {
  return (
    <section className="min-h-screen py-16 px-4 custom-gradient">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-primary flex justify-center items-center"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Lottie animationData={trophyAnimation} className="w-40 h-40" />
          </motion.div>{" "}
          Top Performers
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="overflow-x-auto rounded-xl  bg-base-100 border border-primary shadow-2xl "
        >
            <table className="table w-full table-zebra">
            <thead className="bg-gradient-to-r from-cyan-500 to-blue-500  text-lg text-base-content">
              <tr>
                <th className="py-4 px-6">Rank</th>
                <th className="py-4 px-6">Player</th>
                <th className="py-4 px-6">Email</th>
                <th className="py-4 px-6 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={` ${
                    index % 2 === 0 ? "bg-base-100" : "bg-base-200"
                  }`}
                >
                  <td className="py-4 px-6 font-bold">
                    <span
                      className={`inline-block w-8 h-8 text-center rounded-full ${getMedalColor(
                        index + 1
                      )}`}
                    >
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex items-center gap-3">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-10 h-10 rounded-full ring-2 ring-primary"
                    />
                    <span className="font-medium text-lg">{user.name}</span>
                  </td>
                  <td className="py-4 px-6 text-sm ">{user.email}</td>
                  <td className="py-4 px-6 text-right font-bold text-blue-600 text-lg">
                    <FaStar className="inline text-yellow-400 mr-1" />
                    {user.points}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaderboard;
