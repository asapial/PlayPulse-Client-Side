import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaArrowRight,
  FaTags,
  FaSearch,
} from "react-icons/fa";

const EventTypeCards = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => {
        setEventTypes(data);
        setFilteredEvents(data);
      });
  }, []);

  // Search as user types
  useEffect(() => {
    if (search.trim()) {
      setFilteredEvents(
        eventTypes.filter((event) =>
          event.name.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
    } else {
      setFilteredEvents(eventTypes);
    }
  }, [search, eventTypes]);

  return (
    <div className="custom-gradient min-h-screen py-10 ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, duration: 1 }}
        transition={{ duration: 2 }}
        className="lg:max-w-7xl  mx-auto px-4 py-12"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-5">
            <motion.h2
              className="text-3xl lg:text-4xl font-extrabold text-center mb-3 tracking-tight flex items-center justify-center gap-2"
              animate={{
                color: [
                  "#fbbf24", // premium gold
                  "#a21caf", // premium purple
                  "#0ea5e9", // sky blue
                  "#eab308", // yellow
                  "#f59e42", // orange
                  "#10b981", // emerald
                  "#fbbf24", // gold (loop)
                ],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
                         <span className="">
              <FaTags  />
            </span> Discover Event Types
            </motion.h2>
          </div>
          <p className="text-neutral text-lg text-center max-w-2xl flex items-center gap-2">
            <FaArrowRight className="inline text-primary" />
            Find your next adventure by exploring our diverse event categories!
          </p>
        </div>
        {/* Enhanced Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500">
              <FaSearch />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search event types (e.g. Swimming, All, etc.)"
              className="input input-bordered w-full pl-12 pr-4 py-3 rounded-xl shadow focus:ring-2 focus:ring-primary transition"
              aria-label="Search event types"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-12 text-xl">
              <FaInfoCircle className="inline text-3xl mb-2 text-secondary" />
              <div>No event types match your search.</div>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <Link to={`/showEventData/${event.name}`} key={event.id}>
                <div className="relative group rounded-3xl overflow-hidden flex flex-col h-full shadow-xl border border-slate-200 border-b-8 border-b-yellow-400 hover:border-purple-700 transition duration-300 bg-base-100 hover:shadow-2xl">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-70 object-cover object-center rounded-t-3xl border-b border-slate-200 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-7 flex flex-col items-center text-center gap-4 bg-gradient-to-t from-base-100 to-base-300/50 h-full">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <FaTags className="text-2xl text-yellow-500 group-hover:text-purple-700 transition-colors duration-300" />
                      <h3 className="text-2xl font-bold text-primary">
                        {event.name}
                      </h3>
                    </div>
                    <p className="text-neutral flex items-center gap-2 text-base">
                      <FaInfoCircle className="text-secondary" />
                      {event.description}
                    </p>
                    <button className="mt-4 flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-200 via-purple-200 to-cyan-100 text-primary font-semibold shadow group-hover:bg-yellow-100 transition">
                      View Events <FaArrowRight />
                    </button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EventTypeCards;
