import PerfectScrollbar from "react-perfect-scrollbar";

const Main = ({ children, className }) => {
  return (
    <PerfectScrollbar>
      <main
        className={`space-y-[80px] pb-40 relative overflow-hidden min-h-[500px] ${className}`}
      >
        {children}
      </main>
    </PerfectScrollbar>
  );
};

export default Main;
