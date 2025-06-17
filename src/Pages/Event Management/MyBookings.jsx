import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../main";
import {
  FaCalendarAlt,
  FaTable,
  FaThLarge,
  FaRegSadTear,
} from "react-icons/fa";
import Loader from "../../Components/Common/Loader";
import BookingRow from "../../Atoms/BookingRow";
import BookingEventCard from "../../Atoms/BookingEventCard";
import { ErrorToast, SuccessToast } from "../../Utilities/ToastMaker";
import useFetchApi from "../../api/useFetchApi";
import { motion } from "framer-motion";

const MyBookings = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [relode, setRelode] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const { fetchUserBookingData, fetchBookingDelete } = useFetchApi();
  const [stateLoading, setStateLoading] = useState(false);

  useEffect(() => {
    if (user?.uid && !loading) {
      setStateLoading(true);
      fetchUserBookingData(user.uid, user.email)
        .then((fetchData) => {
          setData(fetchData);
        })
        .finally(() => {
          setStateLoading(false);
        });
    }
  }, [user?.uid, loading, relode]);

  if (loading || stateLoading) {
    return <Loader />;
  }

  const handleEventDelete = (userId, eventId) => {
    eventId;
    fetchBookingDelete(userId, user.email, eventId)
      .then(() => {
        SuccessToast("🗑️ Booking Deleted — Pulse Back in Play!");
        setRelode(!relode);
      })
      .catch((error) => {
        ErrorToast(`Error Occurred: ${error.message}`);
      });
  };

  return (
    <motion.div
      className="custom-gradient mx-auto py-10"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.92 }}
      transition={{ duration: 5, type: "spring" }}
    >
      <div className="w-full lg:max-w-7xl mx-auto py-10 px-4 min-h-screen ">
        <title>PlayPulse | My Bookings</title>
        {/* Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, duration: 2 }}
          transition={{ duration: 3 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4"
        >
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-4xl text-secondary drop-shadow" />
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              My Bookings
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2 ml-2">
              <button
                className={`p-2 rounded-full border shadow transition-all duration-200 ${
                  viewMode === "table"
                    ? "bg-primary text-white border-primary scale-110"
                    : "bg-base-200 text-primary border-base-200 hover:bg-primary/10"
                }`}
                onClick={() => setViewMode("table")}
                title="Table View"
              >
                <FaTable size={20} />
              </button>
              <button
                className={`p-2 rounded-full border shadow transition-all duration-200 ${
                  viewMode === "card"
                    ? "bg-primary text-white border-primary scale-110"
                    : "bg-base-200 text-primary border-base-200 hover:bg-primary/10"
                }`}
                onClick={() => setViewMode("card")}
                title="Card View"
              >
                <FaThLarge size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {viewMode === "table" ? (
          <div className="overflow-x-auto rounded-xl  bg-base-100 border border-primary shadow-2xl ">
            <table className="table w-full table-zebra">
              <thead className="bg-base-200 text-base-content">
                <tr className="text-xl">
                  <th className="py-3 px-4">Sl</th>
                  <th className="py-3 px-4">Event</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Details | Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-12 text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <FaRegSadTear className="text-3xl" />
                        <span>No Bookings found.</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.map((items, index) => (
                    <BookingRow
                      data={items}
                      key={items._id || index}
                      sl={index + 1}
                      handleEventDelete={handleEventDelete}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 transition-all duration-300">
            {data.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-16 flex flex-col items-center">
                <FaRegSadTear className="text-4xl mb-2" />
                <span>No events found.</span>
              </div>
            ) : (
              data.map((items, index) => (
                <BookingEventCard
                  data={items}
                  key={items._id || index}
                  handleEventDelete={handleEventDelete}
                />
              ))
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyBookings;
