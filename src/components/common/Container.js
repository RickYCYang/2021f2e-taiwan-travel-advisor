const Container = ({ className, children }) => {
  return (
    <section className={`container m-auto ${className}`}>{children}</section>
  );
};

export default Container;
