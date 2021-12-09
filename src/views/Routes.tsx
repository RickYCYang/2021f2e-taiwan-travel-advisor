import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router"; // react-router v4/v5
import ErrorBoundary from "./ErrorBoundary";
import LoadingView from "views/LoadingView";
const Home = lazy(() => import("views/Home"));
const Restaurant = lazy(() => import("views/Restaurant"));
const ScenicSpot = lazy(() => import("views/ScenicSpot"));
const Hotel = lazy(() => import("views/Hotel"));
const Traffic = lazy(() => import("views/Traffic"));
const Activity = lazy(() => import("views/Activity"));
const Search = lazy(() => import("views/Search"));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<LoadingView />}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/scenicSpot/">
          <Suspense fallback={<LoadingView />}>
            <ScenicSpot />
          </Suspense>
        </Route>
        <Route exact path="/scenicSpot/:city">
          <Suspense fallback={<LoadingView />}>
            <ScenicSpot />
          </Suspense>
        </Route>
        <Route exact path="/restaurant/">
          <Suspense fallback={<LoadingView />}>
            <Restaurant />
          </Suspense>
        </Route>
        <Route exact path="/restaurant/:city">
          <Suspense fallback={<LoadingView />}>
            <Restaurant />
          </Suspense>
        </Route>
        <Route exact path="/hotel/">
          <Suspense fallback={<LoadingView />}>
            <Hotel />
          </Suspense>
        </Route>
        <Route exact path="/hotel/:city">
          <Suspense fallback={<LoadingView />}>
            <Hotel />
          </Suspense>
        </Route>
        <Route exact path="/traffic/">
          <Suspense fallback={<LoadingView />}>
            <Traffic />
          </Suspense>
        </Route>
        <Route exact path="/traffic/:city">
          <Suspense fallback={<LoadingView />}>
            <Traffic />
          </Suspense>
        </Route>
        <Route exact path="/activity/">
          <Suspense fallback={<LoadingView />}>
            <Activity />
          </Suspense>
        </Route>
        <Route exact path="/activity/:city">
          <Suspense fallback={<LoadingView />}>
            <Activity />
          </Suspense>
        </Route>
        <Route exact path="/search">
          <Suspense fallback={<LoadingView />}>
            <Search />
          </Suspense>
        </Route>
        <Route exact path="/:city">
          <Suspense fallback={<LoadingView />}>
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
