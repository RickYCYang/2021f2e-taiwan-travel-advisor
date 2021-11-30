// hooks
import { useCallback } from "react";
// components
import { UpCircleFilled } from "@ant-design/icons";

const ScrollTopButton = ({scrollbarRef}) => {
  const scorllToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const { current } = scrollbarRef;
    if (current) {
      current.scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  }, []);

  return (
    <UpCircleFilled
      className="text-4xl fixed top-3/4 right-2 opacity-80  cursor-pointer text-custom-pink md:right-10 md:text-5xl lg:right-20"
      onClick={scorllToTop}
    />
  );
};

export default ScrollTopButton;
