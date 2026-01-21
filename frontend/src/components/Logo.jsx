import React from "react";

const Logo = ({
  className = "",
  iconClassName = "w-8 h-8",
  textClassName = "text-2xl",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Air/Fan Logo Icon */}
      <div
        className={`relative flex items-center justify-center ${iconClassName}`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            className="text-primary/20"
          />
          <path
            d="M50 50 L50 10 A40 40 0 0 1 85 30 Z"
            fill="currentColor"
            className="text-primary opacity-90 animate-[spin_4s_linear_infinite] origin-[50px_50px]"
          />
          <path
            d="M50 50 L85 30 A40 40 0 0 1 85 70 Z"
            fill="currentColor"
            className="text-primary opacity-70 animate-[spin_4s_linear_infinite] origin-[50px_50px]"
            style={{ animationDelay: "-1.3s" }}
          />
          <path
            d="M50 50 L85 70 A40 40 0 0 1 50 90 Z"
            fill="currentColor"
            className="text-primary opacity-50 animate-[spin_4s_linear_infinite] origin-[50px_50px]"
            style={{ animationDelay: "-2.6s" }}
          />
          <circle cx="50" cy="50" r="8" fill="white" />
        </svg>
      </div>

      {/* Text Brand */}
      <div className={`font-bold leading-none ${textClassName}`}>
        <span className="text-primary block">Vision</span>
        <span className="text-secondary-dark block -mt-1">Air Solution</span>
      </div>
    </div>
  );
};

export default Logo;
