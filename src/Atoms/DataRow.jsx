import React from 'react';
import { Link } from 'react-router';
import Playpulsebutton from './Playpulsebutton';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DataRow = ({ data, sl,handleEventDelete }) => {
  return (
    <tr className="hover:bg-gray-50 transition-all duration-200">
      <th className="text-gray-600">{sl}</th>
      
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 shadow-lg border border-gray-200">
              <img
                src={data.eventImage}
                alt="Event"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800">{data.eventName}</div>
            <div className="text-sm text-gray-500">{data.eventType}</div>
          </div>
        </div>
      </td>

      <td className="text-gray-700 text-sm text-justify max-w-md">
        {data.description}
      </td>

<th className="w-[200px] flex gap-3">
  {/* Update Button */}
  <Link
    to={`/updateEvent/${data._id}`}
    className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 font-medium rounded-xl shadow-sm hover:bg-blue-200 transition duration-200"
  >
    <FaEdit className="text-blue-600" />
    Update
  </Link>

  {/* Delete Button */}
  <button
    onClick={()=>handleEventDelete(data._id)}
    className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 font-medium rounded-xl shadow-sm hover:bg-red-200 transition duration-200"
  >
    <FaTrash className="text-red-600" />
    Delete
  </button>
</th>

    </tr>
  );
};

export default DataRow;
