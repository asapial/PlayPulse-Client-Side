import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaCalendarAlt, FaInfoCircle, FaArrowRight, FaTags } from "react-icons/fa"; // Added FaTags

const EventTypeCards = () => {
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => setEventTypes(data));
  }, []);

  return (
    <div className="custom-gradient min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-10">
          <FaCalendarAlt className="text-5xl text-primary mb-2 drop-shadow" />
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-blue-700 mb-2">
            Event Types
          </h2>
          <p className="text-neutral text-lg text-center max-w-2xl">
            <FaInfoCircle className="inline mr-2 text-secondary" />
            Explore a variety of event categories and find your next adventure!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {eventTypes.map((event) => (
            <Link to={`/showEventData/${event.name}`} key={event.id}>
              <div className="relative group rounded-3xl overflow-hidden flex flex-col h-full shadow-xl border border-slate-700 border-b-8 border-b-cyan-900 hover:border-cyan-400 transition duration-300 bg-base-100">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-100 object-cover object-center rounded-t-3xl border-b border-slate-800 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex flex-col items-center text-center gap-3 bg-gradient-to-t from-base-100 to-base-300/50 h-full">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FaTags className="text-xl text-primary" /> {/* Changed icon here */}
                    <h3 className="text-2xl font-bold text-primary">{event.name}</h3>
                  </div>
                  <p className="text-neutral flex items-center gap-2">
                    <FaInfoCircle className="text-secondary" />
                    {event.description}
                  </p>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-100 text-primary font-semibold shadow group-hover:bg-cyan-200 transition">
                    View Events <FaArrowRight />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTypeCards;