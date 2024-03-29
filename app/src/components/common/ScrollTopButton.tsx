// hooks
import { useCallback } from 'react';
// components
import { UpCircleFilled } from '@ant-design/icons';

interface ScrollTopButtonProps {
  scrollbarRef: { current: HTMLElement | null };
}

const ScrollTopButton = ({ scrollbarRef }: ScrollTopButtonProps) => {
  const scorllToTop = useCallback(() => {
    const { current } = scrollbarRef;
    if (current) {
      /**
       * behavior: 'smooth' is broken for chrome version v102+
       * ref: https://github.com/mdbootstrap/perfect-scrollbar/issues/138
       */
      // current.scrollTo({
      //   behavior: 'smooth',
      //   top: 0,
      // });
      current.scrollTop = 0;
    }
  }, [scrollbarRef]);

  return (
    <UpCircleFilled
      className="text-4xl fixed top-3/4 right-2 opacity-80  cursor-pointer text-custom-pink md:right-10 md:text-5xl lg:right-20"
      onClick={scorllToTop}
      data-testid="scrollTopBtn"
    />
  );
};

export default ScrollTopButton;
