import React, { MouseEventHandler } from "react";

const Button: React.FC<{
  className?: string;
  onClick: MouseEventHandler;
  title: string;
}> = ({ className, onClick, title }) => {
  return (
    <button
      className={`text-xs cursor-pointer bg-custom-pink text-white px-3 py-2 rounded-lg shadow hover:bg-white
                  hover:text-custom-pink hover:border hover:border-custom-pink md:text-sm md:px-5 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
