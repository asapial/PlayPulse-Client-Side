import React from 'react';
import { Link, useNavigate } from 'react-router';
import Playpulsebutton from './Playpulsebutton';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 18 } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.2 } }
};

const DataRow = ({ data, sl, handleEventDelete }) => {
  const navigate = useNavigate();
  return (
    <motion.tr
      className="hover:bg-base-300 transition-all duration-200"
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 1.01, backgroundColor: "#f0f4ff" }}
      layout
    >
      <th className="text-base-content">{sl}</th>
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 shadow-lg border border-gray-200">
              <img
                src={data.eventImage}
                alt="Event"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-base-content text-xl">{data.eventName}</div>
            <div className="text-lg font-bold text-base-content">{data.eventType}</div>
          </div>
        </div>
      </td>
      <td className="text-base-content text-lg text-justify max-w-md">
        {data.description}
      </td>
      <th className="w-[200px] grid grid-cols-1 gap-3">
        {/* Update Button */}
        <Link
          to={`/updateEvent/${data._id}`}
          className="flex justify-center items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 font-medium rounded-xl shadow-sm hover:bg-blue-200 transition duration-200"
        >
          <FaEdit className="text-blue-600" />
          Update
        </Link>
        {/* Delete Button */}
        <button
          onClick={() => handleEventDelete(data._id)}
          className="flex justify-center items-center gap-2 px-3 py-2 bg-red-100 text-red-700 font-medium rounded-xl shadow-sm hover:bg-red-200 transition duration-200"
        >
          <FaTrash className="text-red-600" />
          Delete
        </button>
        <button
          onClick={() => navigate(`/events/${data._id}`)}
          className="mt-3 w-full"
        >
          <Playpulsebutton>
            View Details
          </Playpulsebutton>
        </button>
      </th>
    </motion.tr>
  );
};

export default DataRow;