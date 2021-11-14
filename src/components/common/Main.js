const Main = ({ children, className }) => {
  return (
    <main
      className={`space-y-[80px] pb-20 relative overflow-hidden min-h-[500px] ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
