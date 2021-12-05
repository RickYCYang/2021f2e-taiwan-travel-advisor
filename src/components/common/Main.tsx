const Main: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <main
      className={`${className} pb-40 relative overflow-hidden min-h-[500px] space-y-[20px] md:space-y-[40px] lg:space-y-[80px]`}
    >
      {children}
    </main>
  );
};

export default Main;
