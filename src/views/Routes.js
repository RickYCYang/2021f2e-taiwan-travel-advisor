import React, { Suspense } from "react";
import { Route, Switch } from "react-router"; // react-router v4/v5
import ErrorBoundary from "./ErrorBoundary";

const Home = React.lazy(() => import("views/Home"));
const Restaurant = React.lazy(() => import("views/Restaurant"));
const ScenicSpot = React.lazy(() => import("views/ScenicSpot"));
const Hotel = React.lazy(() => import("views/Hotel"));
const Traffic = React.lazy(() => import("views/Traffic"));
const Activity = React.lazy(() => import("views/Activity"));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/scenicSpot/">
          <Suspense fallback={<div>Loading...</div>}>
            <ScenicSpot />
          </Suspense>
        </Route>
        <Route exact path="/scenicSpot/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <ScenicSpot />
          </Suspense>
        </Route>
        <Route exact path="/restaurant/">
          <Suspense fallback={<div>Loading...</div>}>
            <Restaurant />
          </Suspense>
        </Route>
        <Route exact path="/restaurant/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <Restaurant />
          </Suspense>
        </Route>
        <Route exact path="/hotel/">
          <Suspense fallback={<div>Loading...</div>}>
            <Hotel />
          </Suspense>
        </Route>
        <Route exact path="/hotel/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <Hotel />
          </Suspense>
        </Route>
        <Route exact path="/traffic/">
          <Suspense fallback={<div>Loading...</div>}>
            <Traffic />
          </Suspense>
        </Route>
        <Route exact path="/traffic/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <Traffic />
          </Suspense>
        </Route>
        <Route exact path="/activity/">
          <Suspense fallback={<div>Loading...</div>}>
            <Activity />
          </Suspense>
        </Route>
        <Route exact path="/activity/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <Activity />
          </Suspense>
        </Route>
        <Route exact path="/:city">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="*">
          <div>
            <h1>404 Page not found</h1>
          </div>
        </Route>
      </Switch>
    </ErrorBoundary>
  );
};

export default Routes;
