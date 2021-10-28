import Banner from "components/common/Banner";
import Cities from "components/home/Cities";
import Activities from "components/home/Activities";
import Restaurant from "components/home/Restaurant";

const Home = () => {
  return (
    <main className="pb-20">
      <Banner bgImageClass="bg-home" />
      <Cities />
      <Activities />
      <Restaurant />
    </main>
  );
};

export default Home;
