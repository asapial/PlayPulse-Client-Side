import React from "react";
import { useNavigate } from "react-router";
import Playpulsebutton from "./Playpulsebutton";
import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const DataCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-110 overflow-hidden group rounded-2xl">
        {/* Image */}
        <img
          src={
            data.eventImage ||
            "https://via.placeholder.com/300x200?text=No+Image"
          }
          alt={data.eventName}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Event Info Overlay */}
        <div className="absolute inset-0 bg-black/50 text-white p-4 flex flex-col justify-end gap-2">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <FaTag className="text-pink-400" /> {data.eventName}
          </h3>
          <p className="text-sm flex items-center gap-2">
            <FaCalendarAlt className="text-blue-400" /> {data.eventDate}
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-400" />{" "}
            {data.eventLocation || "N/A"}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Type:</span> {data.eventType}
          </p>
        </div>

        {/* Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => navigate(`/events/${data._id}`)}
            className="px-5 py-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white font-semibold rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
