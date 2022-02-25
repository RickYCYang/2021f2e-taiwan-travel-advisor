import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";

// components
import Routes from "views/Routes";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import ScrollTopButton from "components/common/ScrollTopButton";
import Scrollbar from "components/common/Scrollbar";

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  const scrollbarRef = useRef(null) as {current: HTMLElement | null};

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="h-screen">
            <Scrollbar scrollbarRef={scrollbarRef}>
              <Header />
              <Routes />
              <ScrollTopButton scrollbarRef={scrollbarRef} />
              <Footer />
            </Scrollbar>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
