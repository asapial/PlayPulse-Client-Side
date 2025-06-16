import React from 'react';
import { useNavigate } from 'react-router';
import Playpulsebutton from './Playpulsebutton';
import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const DataCard = ({ data }) => {
  const navigate = useNavigate();

  return (
 <div className="bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col">
      <figure className="h-150 overflow-hidden rounded-t-2xl">
        <img
          src={data.eventImage || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={data.eventName}
          className="object-cover object-top w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="p-5 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <FaTag className="text-pink-500" /> {data.eventName}
        </h3>
        <div className="flex items-center gap-2 text-sm text-neutral">
          <FaCalendarAlt className="text-blue-500" /> {data.eventDate}
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral">
          <FaMapMarkerAlt className="text-green-600" /> {data.eventLocation || "N/A"}
        </div>
        <div className="text-sm text-neutral mt-1">
          <span className="font-semibold">Type:</span> {data.eventType}
        </div>
        <button
          onClick={() => navigate(`/events/${data._id}`)}
          className="mt-4 w-full"
        >
          <Playpulsebutton>View Details</Playpulsebutton>
        </button>
      </div>
    </div>
  );
};

export default DataCard;