import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../main";
import Playpulsebutton from "../../Atoms/Playpulsebutton";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaTag,
  FaInfoCircle,
  FaUserCheck,
} from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../../Utilities/ToastMaker";
import useFetchApi from "../../api/useFetchApi";
import Loader from "../../Components/Common/Loader";

const EventDetails = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const { fetchEventDetails, fetchBookedData, bookEvent } = useFetchApi();
  const [event, setEvent] = useState({});
  const [stateLoading, setStateLoading] = useState(false);
  const [booked, setBooked] = useState(true);

  // const navigate = useNavigate();
  // console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      setStateLoading(true); // start loading
      try {
        const data = await fetchEventDetails(id, user.email);
        setEvent(data);
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

  useEffect(() => {
    const fetchData = async () => {
      setStateLoading(true); // start loading
      try {
        const data = await fetchBookedData(user.uid, user.email, id);
        setBooked(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setStateLoading(false);
      }
    };
    if (user?.uid) {
      fetchData();
    }

    if (loading || stateLoading) {
      return <Loader />;
    }
  }, [user?.uid, id]);

const handleBookNow = async () => {
  if (user?.uid && id) {
    try {
      const data = await bookEvent(user.uid, user.email, id);
      if (data.acknowledged) {
        setBooked(true);
        SuccessToast("🎉 Event Booked Successfully!");
      }
    } catch (error) {
      ErrorToast(`Error Occurred: ${error.message}`);
    }
  }
};

  return (
    <div className="w-full md:max-w-7xl mx-auto bg-base-100 shadow-primary shadow-xs rounded-2xl p-3 lg:p-8 border border-primary py-10">
      <title>PlayPulse | Details</title>
      <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 text-primary text-center">
        <FaTag className="text-secondary" /> {event.eventName}
      </h2>

      <div className="mainContainer flex flex-col lg:flex-row gap-5">
        <div className="imageContainer w-full lg:w-2/5">
          <img
            src={event.eventImage}
            alt={event.eventName}
            className="w-full max-h-180 object-cover object-top rounded-xl mb-6 border-2 border-primary/20 shadow"
          />
        </div>

        <div className="dataContainer w-full lg:w-3/5">
          <div className="space-y-2 mb-6 bg-base-200 rounded-xl p-6 shadow-inner">
            <p className="flex items-center gap-2 text-lg">
              <FaTag className="text-secondary" />{" "}
              <span className="font-semibold">Type:</span> {event.eventType}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaCalendarAlt className="text-secondary" />{" "}
              <span className="font-semibold">Date:</span> {event.eventDate}
            </p>
            {/* <p className="flex items-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-secondary" />{" "}
          <span className="font-semibold">Location:</span>{" "}
          {event.location || "N/A"}
        </p> */}
            <p className="flex items-center gap-2 text-lg">
              <FaInfoCircle className="text-secondary" />{" "}
              <span className="font-semibold">Description:</span>{" "}
              {event.description}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaUser className="text-secondary" />{" "}
              <span className="font-semibold">Creator Name:</span>{" "}
              {event.creatorName}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-secondary" />{" "}
              <span className="font-semibold">Creator Email:</span>{" "}
              {event.creatorEmail}
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
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full border px-3 py-2 rounded  focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center gap-1">
                  <FaEnvelope className="text-secondary" /> Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full border px-3 py-2 rounded  focus:outline-none"
                />
              </div>
            </form>
          </div>

          {booked ? (
            <button className="w-full mt-8">
              <Playpulsebutton>
                <span className="flex items-center justify-center gap-2">
                  <FaUserCheck /> Booked
                </span>
              </Playpulsebutton>
            </button>
          ) : (
            <button onClick={handleBookNow} className="w-full mt-8">
              <Playpulsebutton>
                <span className="flex items-center justify-center gap-2">
                  <FaUserCheck /> Book Now
                </span>
              </Playpulsebutton>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
