import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { setScrollTop } from "redux/slices/scrollSlice";

const Scrollbar = ({children, scrollbarRef}) => {
  const dispatch = useDispatch();
  const _onScollY = (container) => {
    dispatch(setScrollTop(container.scrollTop)); 
  }

  return (
    <PerfectScrollbar containerRef={(el) => (scrollbarRef.current = el)} onScrollY={_onScollY}>
      {children}
    </PerfectScrollbar>
  );
}

export default Scrollbar