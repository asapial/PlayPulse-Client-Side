import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../main';
import Swal from 'sweetalert2';
import Playpulsebutton from '../../Atoms/Playpulsebutton';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaEnvelope, FaTag, FaInfoCircle, FaUserCheck } from 'react-icons/fa';


const EventDetails = () => {

    const {id}=useParams()
    const {user}=useContext(AuthContext);
    const [event,setEvent]=useState({});


    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
        .then(res=>res.json())
        .then(data=>setEvent(data));
    },[])

    const handleBookNow=()=>{

    }


  return (
<div className="w-full md:max-w-5xl mx-auto bg-base-100 shadow-2xl rounded-2xl p-8 mt-10">
      <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 text-primary">
        <FaTag className="text-secondary" /> {event.eventName}
      </h2>
      <img
        src={event.eventImage}
        alt={event.eventName}
        className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-primary/20 shadow"
      />
      <div className="space-y-2 mb-6">
        <p className="flex items-center gap-2 text-lg">
          <FaTag className="text-secondary" /> <span className="font-semibold">Type:</span> {event.eventType}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaCalendarAlt className="text-secondary" /> <span className="font-semibold">Date:</span> {event.eventDate}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-secondary" /> <span className="font-semibold">Location:</span> {event.location || "N/A"}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaInfoCircle className="text-secondary" /> <span className="font-semibold">Description:</span> {event.description}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaUser className="text-secondary" /> <span className="font-semibold">Creator Name:</span> {event.creatorName}
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaEnvelope className="text-secondary" /> <span className="font-semibold">Creator Email:</span> {event.creatorEmail}
        </p>
      </div>

      <div className="mt-8 bg-base-200 rounded-xl p-6 shadow-inner">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
          <FaUserCheck className="text-secondary" /> Participant Details
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center gap-1">
              <FaUser className="text-secondary" /> Name
            </label>
            <input
              type="text"
              value={user?.displayName || ''}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center gap-1">
              <FaEnvelope className="text-secondary" /> Email
            </label>
            <input
              type="email"
              value={user?.email || ''}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 focus:outline-none"
            />
          </div>
        </form>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full mt-8"
      >
        <Playpulsebutton>
          <span className="flex items-center justify-center gap-2">
            <FaUserCheck /> Book Now
          </span>
        </Playpulsebutton>
      </button>
    </div>
  );
};

export default EventDetails;