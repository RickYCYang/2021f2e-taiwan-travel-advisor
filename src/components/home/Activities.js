import SubTitle from "./SubTitle";
import ActivityCollection from "./ActivityCollection";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Activities = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="container m-auto">
        <SubTitle subTitle="熱門活動" />
        <ActivityCollection />
      </section>
    </QueryClientProvider>
  );
};

export default Activities;
