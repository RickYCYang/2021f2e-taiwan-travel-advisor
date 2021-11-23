// libs
// import { Provider } from "react-redux";
// import configureStore, { history } from "./redux/configureStore";
// import { ConnectedRouter } from "connected-react-router";

// Local components
import Routes from "views/Routes";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ScrollTopButton from "components/common/ScrollTopButton";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes />
          <ScrollTopButton />
          <Footer />
        </Router>
      </QueryClientProvider>
    </Provider>
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
