import { ReactChild } from 'react';

interface MainProps {
  children: ReactChild[] | ReactChild;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main
      className={`${className} pb-40 relative overflow-hidden min-h-[500px] space-y-[20px] md:space-y-[40px] lg:space-y-[80px]`}
    >
      {children}
    </main>
  );
};

export default Main;
