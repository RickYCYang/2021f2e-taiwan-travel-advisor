const SubTitle = ({ subTitle, icon }) => {
  ///icon ?? <div className="border-triangle-pink-2 mr-4"></div>

  let iconComponent = null;

  if (icon === "triangle") {
    iconComponent = <div className="border-triangle-pink-2 mr-4"></div>;
  } else if (icon === "rectangle") {
    iconComponent = (
      <svg width="20" height="20" className="mr-4">
        <rect width="20" height="20" fill="#FFB72C" />
      </svg>
    );
  }

  return (
    <h2 className="flex items-center text-xl mb-3">
      {iconComponent}
      {subTitle}
    </h2>
  );
};

export default SubTitle;
