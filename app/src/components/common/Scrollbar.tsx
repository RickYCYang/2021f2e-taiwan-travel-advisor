import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch } from 'react-redux';
import { setScrollTop } from 'redux/slices/scrollSlice';

const Scrollbar: React.FC<{
  scrollbarRef: { current: HTMLElement | null };
}> = ({ children, scrollbarRef }) => {
  const dispatch = useDispatch();
  const _onScollY = (container: HTMLElement): void => {
    dispatch(setScrollTop(container.scrollTop));
  };

  return (
    <PerfectScrollbar
      containerRef={(el) => (scrollbarRef.current = el)}
      onScrollY={(container: HTMLElement) => _onScollY(container)}
    >
      {children}
    </PerfectScrollbar>
  );
};

export default Scrollbar;
