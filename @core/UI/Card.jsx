import React from "react";

function Card({ children }) {
  return (
    <div className="bg-[white] mb-8 rounded-xl lg:mr-8 p-6">{children}</div>
  );
}

export default Card;
