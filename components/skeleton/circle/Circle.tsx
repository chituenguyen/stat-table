import React from "react";

interface CircleProps {
  classes: string;
}

const Circle: React.FC<CircleProps> = ({ classes }) => {
  return (
    <div
      className={`relative ${
        classes ? classes : ""
      } rounded-full overflow-hidden shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20`}
    >
      <div className="h-full w-full bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default Circle;
