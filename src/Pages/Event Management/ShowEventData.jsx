import React, { useEffect, useState } from "react";
import DataCard from "../../Atoms/DataCard";
import { FaSearch } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useParams } from "react-router";
import Loader from "../../Components/Common/Loader";
import { motion } from "framer-motion";

const ShowEventData = () => {
  const [data, setData] = useState([]);
  const { event } = useParams();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false);

  // Fetch data on load and when event/search changes
  useEffect(() => {
    // Fetch for the initial event load or when event changes
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://play-pulse-server.vercel.app/showEventData/${event}`
        );
        const fetchData = await res.json();
        setData(fetchData);
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [event]);

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    try {
      const url = `https://play-pulse-server.vercel.app/showEventData/${event}?search=${encodeURIComponent(
        search
      )}`;
      const res = await fetch(url);
      const fetchData = await res.json();
      setData(fetchData);
    } catch (err) {
      console.error("Error fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="custom-gradient mx-auto py-10">
      <section className="w-full max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-2">
          <title>PlayPulse | EventData</title>
          <Typewriter
            words={[
              "Dive into the thrill of Swimming! 🏊‍♂️💦",
              "Feel the adrenaline of Sprinting! 🏃‍♀️💨",
              "Soar through the air with Long Jump! 🏅🦘",
              "Reach new heights in High Jump! 🏃‍♂️⬆️🏆",
              "Leap over limits in the Hurdle Race! 🏃‍♀️⚡🏁",
              "Make a splash in Water Polo! 🤽‍♂️🌊",
              "Show your skills in Fencing! 🤺⚔️",
              "Spike it like a pro in Volley-Ball! 🏐🔥",
              "Smash the shuttle in Badminton! 🏸⚡",
              "Explore even more exciting games! 🎯🎮",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={500}
          />
        </h2>

        <div className="flex justify-center mb-8 gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search event type or name..."
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="button"
            className="btn btn-primary flex items-center gap-2"
            aria-label="Search"
            disabled={!search.trim()}
            onClick={handleSearchClick}
          >
            <FaSearch /> Search
          </button>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          drag
          dragElastic={0.7}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Snap back to origin
          whileDrag={{
            scale: 1.04,
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {data.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              No events found.
            </div>
          ) : (
            data.map((item, index) => (
              <DataCard data={item} key={item._id || index} />
            ))
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ShowEventData;
