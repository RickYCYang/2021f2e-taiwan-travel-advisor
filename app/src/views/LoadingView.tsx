import Loading from "components/common/Loading";
import Main from "components/common/Main";

const LoadingView: React.FC = () => {
  return (
    <Main className="h-screen flex justify-center items-center">
      <Loading />
    </Main>
  );
};

export default LoadingView;
