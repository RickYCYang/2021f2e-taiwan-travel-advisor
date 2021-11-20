const Container = ({ className, children }) => {
  return (
    <section className={`container m-auto px-16 lg:px-0 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
