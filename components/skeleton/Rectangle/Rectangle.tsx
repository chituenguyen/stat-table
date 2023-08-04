import React from "react";

interface RectangleProps {
  classes?: string;
}
const Rectangle: React.FC<RectangleProps> = ({ classes }) => {
  return (
    <div
      className={`relative ${
        classes ? classes : ""
      } overflow-hidden flex justify-center shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white`}
    >
      <div className="h-full w-full bg-gray-300 "></div>
    </div>
  );
};

export default Rectangle;
