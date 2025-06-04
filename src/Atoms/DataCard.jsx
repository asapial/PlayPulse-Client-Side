import React from 'react';
import { useNavigate } from 'react-router';
import Playpulsebutton from './Playpulsebutton';

const DataCard = ({ data }) => {

    const navigate=useNavigate();

  return (
    <div
      className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
    >
      <figure className="h-48 overflow-hidden rounded-t-2xl">
        <img
          src={
            data.eventImage || "https://via.placeholder.com/300x200?text=No+Image"
          }
          alt={data.eventName}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </figure>



      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{data.eventName}</h3>
        <p className="text-sm text-gray-500 mt-1">Cuisine: {data.eventType}</p>

        <button
          onClick={() => navigate(`/events/${data._id}`)}
          className=' w-full'
        >
          <Playpulsebutton>View Details</Playpulsebutton>
        </button>
      </div>
    </div>
  );
};

export default DataCard;

