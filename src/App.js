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
  );
};

export default App;
