import React from 'react';
import Playpulsebutton from './Playpulsebutton';
import { Link, useNavigate } from 'react-router';
import { FaEdit, FaTrash, FaCalendarAlt, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }
};

const EventCard = ({ data, handleEventDelete }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="bg-base-100 border border-primary shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
      layout
    >
      <motion.figure
        className="h-150 overflow-hidden rounded-t-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={data.eventImage || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={data.eventName}
          className="object-cover object-top w-full h-full transition-transform duration-300"
        />
      </motion.figure>
      <div className="p-5 flex-1 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
          <FaTag className="text-secondary" /> {data.eventName}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt className="text-primary" /> {data.eventDate}
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <span className="font-semibold">Type:</span> {data.eventType}
        </div>
        <div className="text-sm text-gray-500 mt-1 line-clamp-2">
          <span className="font-semibold">Description:</span> {data.description}
        </div>
        <div className="flex gap-2 mt-4">
          {/* Update Button */}
          <Link
            to={`/updateEvent/${data._id}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 font-medium rounded-xl shadow-sm hover:bg-blue-200 transition duration-200"
          >
            <FaEdit className="text-blue-600" />
            Update
          </Link>
          {/* Delete Button */}
          <button
            onClick={() => handleEventDelete(data._id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-100 text-red-700 font-medium rounded-xl shadow-sm hover:bg-red-200 transition duration-200"
          >
            <FaTrash className="text-red-600" />
            Delete
          </button>
        </div>
        <button
          onClick={() => navigate(`/events/${data._id}`)}
          className="mt-3 w-full"
        >
          <Playpulsebutton>
            View Details
          </Playpulsebutton>
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;