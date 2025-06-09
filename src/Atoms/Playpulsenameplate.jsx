import React from "react";
import { GiSprint } from "react-icons/gi";

const Playpulsenameplate = () => {
  return (
    <span className="text-primary flex justify-center items-center">
      <GiSprint className="text-neutral" />
      Play<span className=" text-secondary">Pulse</span>
    </span>
  );
};

export default Playpulsenameplate;
