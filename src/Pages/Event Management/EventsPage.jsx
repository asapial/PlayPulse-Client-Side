import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const EventTypeCards = () => {
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    fetch("/event.json")
      .then((res) => res.json())
      .then((data) => setEventTypes(data));
  }, []);
  console.log(eventTypes);

  return (
    <div className="custom-gradient">
            <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center text-blue-700">
        Event Types
      </h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        {eventTypes.map((event) => (
          <Link to={`/showEventData/${event.name}`} key={event.id} >
            <div className="relative  rounded-3xl overflow-hidden flex flex-col h-full shadow-lg border border-slate-700 border-b-8 border-b-cyan-900 group-hover:border-cyan-400 transition">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover object-center rounded-t-3xl border-b border-slate-800"
              />
              <div className="p-6 flex flex-col items-center text-center gap-2  bg-gradient-to-t from-base-100 to-base-300/50 h-full ">
                <h3 className="text-2xl font-bold text-primary">
                  {event.name}
                </h3>
                <p className="text-neutral ">{event.description}</p>
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
