import Lottie from "lottie-react";
import sportAnimation from "../../assets/LottiAnimation/createEvent.json";
import { AuthContext } from "../../main";
import { useNavigate, useParams } from "react-router";
import {
  FaEnvelope,
  FaUser,
  FaImage,
  FaCalendarAlt,
  FaListAlt,
  FaAlignLeft,
} from "react-icons/fa";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";
import { useContext, useEffect, useState } from "react";
import Playpulsebutton from "../../Atoms/Playpulsebutton";
import { toast } from "react-toastify";
import Loader from "../../Components/Common/Loader";

const UpdateEvent = () => {
const eventTypes = [
  "Swimming",
  "Sprinting",
  "Long Jump",
  "High Jump",
  "Hurdle race",
  "Water-Polo",
  "Fencing",
  "Volley-Ball", 
  "Other", 
];

  const { user,loading } = useContext(AuthContext);
  const [event, setEvent] = useState();
  const navigate=useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(()=>{
  fetch(`http://localhost:3000/events/${id}`)
    .then((res) => res.json())
    .then((data) => setEvent(data));
  },[])

    if(loading)
  {
    return <Loader></Loader>
  }
  console.log(event);

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form=e.target;
    const formData=new FormData(form);
    const data=Object.fromEntries(formData.entries())
    console.log(data);

        fetch(`http://localhost:3000/updateEvent/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              toast.success("Data is Updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate('/manageEvents')
            }
          });
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-base-300 via-base-100 to-base-300 flex items-center justify-center px-4">
    <title>PlayPulse | UpdateEvent</title>
      <div className="bg-base-200 shadow-2xl rounded-2xl w-full md:w-4/5  lg:flex justify-center items-center">
        {/* Lottie Animation */}
        <div className="w-full lg:w-2/5 h-[500px] flex justify-center items-center p-10">
          <img src={event?.eventImage}/>
        </div>

        {/* Event Creation Form */}
        <div className="p-8 space-y-6 w-full lg:w-3/5">
          <h2 className="text-3xl font-extrabold text-center text-neutral">
            Update Event <Playpulsenameplate />
          </h2>
          <form className="space-y-4" onSubmit={handleUpdateEvent}>
            {/* Event Name */}
            <div className="relative">
              <FaListAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="eventName"
                placeholder="Event Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
                defaultValue={event?.eventName}
              />
            </div>
            {/* Event Type */}
            <div className="relative">
              <FaListAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="eventType"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
                defaultValue={event?.eventType}
              >
                <option value="" disabled>
                  Select Event Type
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {/* Event Date */}
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="eventDate"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
                 defaultValue={event?.eventDate}
              />
            </div>
            {/* Description */}
            <div className="relative">
              <FaAlignLeft className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="description"
                placeholder="Event Description"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows={3}
                required
                defaultValue={event?.description}

                />
            </div>
            {/* Creator Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="creatorEmail"
                value={user?.email || ""}
                readOnly
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
            {/* Creator Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="creatorName"
                value={user?.displayName || ""}
                readOnly
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
            {/* Event Picture */}
            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                name="eventImage"
                placeholder="Event Image URL"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
                defaultValue={event?.eventImage}

              />
            </div>
            {/* Submit Button */}
            <button type="submit" className=" w-full">
              <Playpulsebutton>Update Event</Playpulsebutton>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateEvent;
