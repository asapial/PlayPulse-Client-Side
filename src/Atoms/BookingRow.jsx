import React from 'react';
import { Link } from 'react-router';
import Playpulsebutton from './Playpulsebutton';
import {  FaTrash } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';

const BookingRow = ({ data, sl,handleEventDelete }) => {
    console.log(data);
  return (
    <tr className="hover:bg-base-300 transition-all duration-200">
      <th className="text-base-content">{sl}</th>
      
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 shadow-lg border border-gray-200">
              <img
                src={data.event.eventImage}
                alt="Event"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-base-content text-xl">{data.event.eventName}</div>
            <div className="text-lg font-bold text-base-content">{data.event.eventType}</div>
          </div>
        </div>
      </td>

      <td className="text-base-content text-lg text-justify max-w-md">
        {data.event.description}
      </td>

<th className="w-[250px] grid grid-cols-1 lg:grid-cols-2 gap-1">
 <Link
    to={`/events/${data.eventId}`}
    className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 font-medium rounded-xl shadow-sm hover:bg-blue-200 transition duration-200"
  >


    <TbListDetails className="text-blue-600" />
    See Details
  </Link>

  {/* Delete Button */}
  <button
    onClick={()=>handleEventDelete(data.userId,data.eventId)}
    className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 font-medium rounded-xl shadow-sm hover:bg-red-200 transition duration-200"
  >
    <FaTrash className="text-red-600" />
    Delete
  </button>
</th>

    </tr>
  );
};

export default BookingRow;
