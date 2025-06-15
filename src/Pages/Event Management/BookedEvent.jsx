import React, { useContext, useEffect, useState } from "react";
import useFetchApi from "../../api/useFetchApi";
import { AuthContext } from "../../main";
import BookedEventRow from "../../Atoms/BookedEventRow";
import {
  FaCalendarAlt,
  FaRegSadTear,
  FaListUl,
  FaUsers,
  FaInfoCircle,
} from "react-icons/fa";
import Loader from "../../Components/Common/Loader";

const BookedEvent = () => {
  const { fetchMyEventsWithBookings } = useFetchApi();
  const [data, setData] = useState([]);
  const [stateLoading, setStateLoading] = useState(false);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user?.email) {
      setStateLoading(true);
      fetchMyEventsWithBookings(user.email)
        .then((fetchData) => {
          setData(fetchData);
        })
        .catch((error) => {
          console.error("Failed to fetch booked events:", error);
        })
        .finally(() => {
          setStateLoading(false);
        });
    }
  }, [user?.email, loading]);

  if (loading || stateLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full lg:max-w-7xl mx-auto py-10 px-4 min-h-screen custom-gradient">
      <title>PlayPulse | Booked Events</title>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-4xl text-secondary drop-shadow" />
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">
            My Booked Events
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-base-100 border border-primary shadow-2xl">
        <table className="table w-full table-zebra">
          <thead className="bg-base-200 text-base-content">
            <tr className="text-xl">
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <FaListUl className="text-primary" /> Sl
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-secondary" /> Event
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-cyan-500" /> Booked Users
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <FaInfoCircle className="text-pink-500" /> Details
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <FaRegSadTear className="text-4xl mb-2" />
                    <span>No booked events found yet.</span>
                  </div>
                </td>
              </tr>
            ) : (
              data
                .filter(
                  (items) => items.bookedUsers && items.bookedUsers.length > 0
                )
                .map((items, index) => (
                  <BookedEventRow
                    data={items}
                    key={items._id || index}
                    sl={index + 1}
                  />
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedEvent;
