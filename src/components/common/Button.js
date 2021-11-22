const Button = ({ className, onClick, title }) => {
  return (
    <button
      className={` text-xs md:text-sm cursor-pointer bg-custom-pink text-white px-3 md:px-5 py-2 rounded-lg shadow hover:bg-white
                  hover:text-custom-pink hover:border hover:border-custom-pink ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
