import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Playpulsebutton from "./Playpulsebutton";
import { FaUser, FaEnvelope, FaRegCopy } from "react-icons/fa";
import { SuccessToastSm } from "../Utilities/ToastMaker";

const BookedEventRow = ({ data, sl }) => {
  const navigate = useNavigate();
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (email, idx) => {
    navigator.clipboard.writeText(email);
    setCopiedIdx(idx);
    SuccessToastSm("Email Copied!")
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <tr className="hover:bg-base-300 transition-all duration-200">
      <td className="text-base-content font-semibold">{sl}</td>

      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 shadow-lg border border-gray-200">
              <img src={data.eventImage} alt="Event" className="object-cover" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-base-content text-xl">
              {data.eventName}
            </div>
            <div className="text-lg font-bold text-base-content">
              {data.eventType}
            </div>
          </div>
        </div>
      </td>

      <td className="text-base-content text-lg text-justify max-w-md">
        {/* Small data card with bookedUser name and email */}
        <div className="flex flex-col gap-2">
          {data.bookedUsers && data.bookedUsers.length > 0 ? (
            data.bookedUsers.map((user, idx) => (
              <div
                key={idx}
                className="bg-base-200 rounded-lg p-2 flex items-center gap-3 shadow-sm border border-base-300"
              >
                <FaUser className="text-cyan-500" />
                <span className="font-semibold">{user.userName}</span>
                <FaEnvelope className="ml-3 text-pink-400" />
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  {user.userEmail}
                  <button
                    type="button"
                    className="ml-1 p-1 rounded hover:bg-base-300 transition"
                    title="Copy email"
                    onClick={() => handleCopy(user.userEmail, idx)}
                  >
                    <FaRegCopy className="text-gray-400 text-xs" />
                  </button>
                  {copiedIdx === idx && (
                    <span className="ml-1 text-green-500 text-xs">Copied!</span>
                  )}
                </span>
              </div>
            ))
          ) : (
            <span className="text-gray-400">No users booked</span>
          )}
        </div>
      </td>

      <td className="w-[200px] grid grid-cols-1 gap-3">
        <button
          onClick={() => navigate(`/events/${data._id}`)}
          className="mt-3 w-full"
        >
          <Playpulsebutton>View Details</Playpulsebutton>
        </button>
      </td>
    </tr>
  );
};

export default BookedEventRow;