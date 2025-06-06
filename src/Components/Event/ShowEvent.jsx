import React, { useEffect, useState } from "react";
import DataCard from "../../Atoms/DataCard";
import { FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const ShowEvent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/showSixData")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData));
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-2">
        <Typewriter
          words={[
            "Discover Exclusive Events ✨",
            "Book. Attend. Enjoy.",
            "Unforgettable Moments Await!",
            "Events Curated for You 🧠",
            "Level Up Your Life 🚀",
            "Where Passion Meets Purpose ❤️",
            "Experience. Explore. Elevate.",
            "One Click Away from Amazing!",
            "Join. Learn. Thrive.",
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
  );
};

export default ShowEvent;
