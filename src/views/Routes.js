import React, { Suspense } from "react";
import { Route, Switch } from "react-router"; // react-router v4/v5
import ErrorBoundary from "./ErrorBoundary";

const Home = React.lazy(() => import("views/Home"));
const RestaurantHotel = React.lazy(() => import("views/RestaurantHotel"));
const Attraction = React.lazy(() => import("views/Attraction"));
const Traffic = React.lazy(() => import("views/Traffic"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </Route>
      <Route exact path="/attraction">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Attraction />
          </Suspense>
        </ErrorBoundary>
      </Route>
      <Route exact path="/RestaurantHotel">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantHotel />
          </Suspense>
        </ErrorBoundary>
      </Route>
      <Route exact path="/traffic">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Traffic />
          </Suspense>
        </ErrorBoundary>
      </Route>
      <Route exact path="*">
        <div>
          <h1>404 Page not found</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default Routes;
