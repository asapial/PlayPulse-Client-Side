import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../main";
import DataRow from "../../Atoms/DataRow";
import { FaCalendarAlt, FaPlusCircle, FaTable, FaThLarge } from "react-icons/fa";
import Loader from "../../Components/Common/Loader";
import { toast } from "react-toastify";
import EventCard from "../../Atoms/EventCard";

const ManageEventsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [relode, setRelode] = useState(false);
  const [viewMode, setViewMode] = useState("table");

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`http://localhost:3000/myEvents?email=${user.email}`)
        .then((res) => res.json())
        .then((fetchData) => setData(fetchData));
    }
  }, [loading, user?.email, relode]);

  if (loading) {
    return <Loader></Loader>;
  }

  const handleEventDelete = (id) => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((deletedData) => {
        if (deletedData.deletedCount) {
          toast.success("Event is deleted successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setRelode(!relode);
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-primary">
          <FaCalendarAlt className="text-secondary" /> Manage My Events
        </h2>
        <button
          className="flex items-center gap-2 bg-primary text-base-100 px-4 py-2 rounded-lg shadow hover:bg-secondary transition"
          onClick={() => (window.location.href = "/createEvent")}
        >
          <FaPlusCircle /> Create Event
        </button>
        <div className="flex justify-end mb-4 gap-2">
          <button
            className={`p-2 rounded ${
              viewMode === "table" ? "bg-primary text-white" : "bg-base-200"
            }`}
            onClick={() => setViewMode("table")}
            title="Table View"
          >
            <FaTable />
          </button>
          <button
            className={`p-2 rounded ${
              viewMode === "card" ? "bg-primary text-white" : "bg-base-200"
            }`}
            onClick={() => setViewMode("card")}
            title="Card View"
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      {
        (viewMode=='table'?( 
      <div className="overflow-x-auto rounded-xl shadow-lg bg-base-100">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="py-3 px-4">Sl</th>
              <th className="py-3 px-4">Event </th>
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
      </div>):(            <div className="   grid grid-cols-3 gap-5">
                {
                    data.map((items, index) => (
                <EventCard
                  data={items}
                  key={ index}
                  handleEventDelete={handleEventDelete}
                />
              ))
                }
            </div>))
      }




    </div>
  );
};

export default ManageEventsPage;
