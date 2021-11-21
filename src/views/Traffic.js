// components
import Main from "components/common/Main";
import Searchbar from "components/traffic/Searchbar";
import RouteFlow from "components/traffic/RouteFlow";

const Traffic = () => {
  return (
    <Main className="space-y-p[24px] md:space-y-[48px]">
      <Searchbar />
      <RouteFlow />
    </Main>
  );
};

export default Traffic;
