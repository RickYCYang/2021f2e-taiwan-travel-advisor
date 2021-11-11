import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQueryParam = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQueryParam;
