import React, { useEffect, useState } from "react";
import DataCard from "../../Atoms/DataCard";
import { FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useParams } from "react-router";
import Loader from "../../Components/Common/Loader";

const ShowEventData = () => {
  const [data, setData] = useState([]);
  const { event } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://play-pulse-server.vercel.app/showEventData/${event}`)
      .then((res) => res.json())
      .then((fetchData) => {
        setData(fetchData);
        setLoading(false); // Now runs after data is set
      })
      .catch(() => setLoading(false)); // Also stop loading on error
  }, [event]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="custom-gradient mx-auto">
      <section className="max-w-11/12 mx-auto py-10 px-4 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-8">
              No events found.
            </div>
          ) : (
            data.map((item, index) => (
              <DataCard data={item} key={item._id || index} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ShowEventData;
