import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const TooSmall = () => {
  return (
    <div>
      <FaAngleDoubleLeft />
      "Go wider!"
      <FaAngleDoubleRight />
    </div>
  );
};

export default TooSmall;
