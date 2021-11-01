// libs
// import { Provider } from "react-redux";
// import configureStore, { history } from "./redux/configureStore";
// import { ConnectedRouter } from "connected-react-router";

// Local components
import Routes from "views/Routes";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </QueryClientProvider>
    // Redux Version
    // <Provider store={configureStore({})}>
    //   <ConnectedRouter history={history}>
    //     <Header />
    //     <Router />
    //   </ConnectedRouter>
    // </Provider>
  );
};

export default App;
