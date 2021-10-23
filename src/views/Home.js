import Banner from "components/common/Banner";
import Cities from "components/home/Cities";
import Activities from "components/home/Activities";

const Home = () => {
  return (
    <main className="">
      <Banner bgImageClass="bg-home" />
      <Cities />
      <Activities />
    </main>
  );
};

export default Home;
