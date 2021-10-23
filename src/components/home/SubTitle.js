const SubTitle = ({ subTitle }) => {
  return (
    <h2 className="flex items-center text-xl mb-3">
      <div className="border-triangle-pink-2 mr-4"></div>
      {subTitle}
    </h2>
  );
};

export default SubTitle;
