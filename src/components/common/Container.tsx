import React from "react";

const Container: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <section className={`container m-auto px-3 md:px-16 lg:px-0 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
