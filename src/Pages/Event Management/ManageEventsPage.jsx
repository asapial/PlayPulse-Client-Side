import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../main";
import DataRow from "../../Atoms/DataRow";
import {
  FaCalendarAlt,
  FaPlusCircle,
  FaTable,
  FaThLarge,
} from "react-icons/fa";
import Loader from "../../Components/Common/Loader";
import EventCard from "../../Atoms/EventCard";
import useFetchApi from "../../api/useFetchApi";
import { ErrorToast, SuccessToast } from "../../Utilities/ToastMaker";
import { motion } from "framer-motion";

const ManageEventsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const [stateLoading, setStateLoading] = useState(false);
  const { myEvents, fetchEventDelete } = useFetchApi();

  useEffect(() => {
    const fetchData = async () => {
      setStateLoading(true);
      try {
        const data = await myEvents(user.email);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setStateLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  if (loading || stateLoading) {
    return <Loader />;
  }

  // Delete event and remove from UI without reload
  const handleEventDelete = (id) => {
    fetchEventDelete(user.email, id)
      .then((deletedData) => {
        if (deletedData.deletedCount) {
          SuccessToast("🗑️ Event Deleted Successfully");
          setData((prev) => prev.filter((item) => item._id !== id));
        }
      })
      .catch((error) => {
        ErrorToast(`Error Occurred: ${error.message}`);
      });
  };

  return (
    <div className="custom-gradient mx-auto py-10">
      <div className="w-full lg:max-w-7xl mx-auto py-10 px-4 min-h-screen">
        <title>PlayPulse | ManageEvents</title>
        {/* Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, duration: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4"
        >
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-4xl text-secondary drop-shadow" />
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              Manage My Events
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 bg-primary text-base-100 px-4 py-2 rounded-lg shadow hover:bg-secondary transition"
              onClick={() => (window.location.href = "/createEvent")}
            >
              <FaPlusCircle />{" "}
              <span className="hidden sm:inline">Create Event</span>
            </button>
            <div className="flex gap-2 ml-2">
              <button
                className={`p-2 rounded-full border transition ${
                  viewMode === "table"
                    ? "bg-primary text-white border-primary"
                    : "bg-base-200 text-primary border-base-200"
                }`}
                onClick={() => setViewMode("table")}
                title="Table View"
              >
                <FaTable />
              </button>
              <button
                className={`p-2 rounded-full border transition ${
                  viewMode === "card"
                    ? "bg-primary text-white border-primary"
                    : "bg-base-200 text-primary border-base-200"
                }`}
                onClick={() => setViewMode("card")}
                title="Card View"
              >
                <FaThLarge />
              </button>
            </div>
          </div>
        </motion.div>

        {viewMode === "table" ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, duration: 1 }}
            transition={{ duration: 2 }}
            className="overflow-x-auto rounded-xl  bg-base-100 border border-primary shadow-2xl "
          >
            <table className="table w-full table-zebra">
              <thead className="bg-base-200 text-base-content">
                <tr className="text-xl">
                  <th className="py-3 px-4">Sl</th>
                  <th className="py-3 px-4">Event</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Update | Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      No events found.
                    </td>
                  </tr>
                ) : (
                  data.map((items, index) => (
                    <DataRow
                      data={items}
                      key={items._id || index}
                      sl={index + 1}
                      handleEventDelete={handleEventDelete}
                    />
                  ))
                )}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, duration: 1 }}
            transition={{ duration: 2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {data.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-8">
                No events found.
              </div>
            ) : (
              data.map((items, index) => (
                <EventCard
                  data={items}
                  key={items._id || index}
                  handleEventDelete={handleEventDelete}
                />
              ))
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ManageEventsPage;