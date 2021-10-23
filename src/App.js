// libs
// import { Provider } from "react-redux";
// import configureStore, { history } from "./redux/configureStore";
// import { ConnectedRouter } from "connected-react-router";

// Local components
import Routes from "views/Routes";
import Header from "components/common/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
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
