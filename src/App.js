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
import PerfectScrollbar from "react-perfect-scrollbar";

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });

const App = () => {
  const scrollbarRef = useRef();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="h-screen">
            <PerfectScrollbar className="z-20" style={{zIndex: "31"}} containerRef={(element) => (scrollbarRef.current = element)}>
              <Header />
              <Routes />
              <ScrollTopButton scrollbarRef={scrollbarRef} />
              <Footer />
            </PerfectScrollbar>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
