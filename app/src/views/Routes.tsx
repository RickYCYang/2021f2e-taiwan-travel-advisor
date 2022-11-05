import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import ErrorBoundary from './ErrorBoundary';
import LoadingView from 'views/LoadingView';
const Home = lazy(() => import('views/Home'));
const Restaurant = lazy(() => import('views/Restaurant'));
const ScenicSpot = lazy(() => import('views/ScenicSpot'));
const Hotel = lazy(() => import('views/Hotel'));
const Traffic = lazy(() => import('views/Traffic'));
const Activity = lazy(() => import('views/Activity'));
const Search = lazy(() => import('views/Search'));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingView />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/scenicSpot/">
            <ScenicSpot />
          </Route>
          <Route exact path="/scenicSpot/:city">
            <ScenicSpot />
          </Route>
          <Route exact path="/restaurant/">
            <Restaurant />
          </Route>
          <Route exact path="/restaurant/:city">
            <Restaurant />
          </Route>
          <Route exact path="/hotel/">
            <Hotel />
          </Route>
          <Route exact path="/hotel/:city">
            <Hotel />
          </Route>
          <Route exact path="/traffic/">
            <Traffic />
          </Route>
          <Route exact path="/activity/">
            <Activity />
          </Route>
          <Route exact path="/activity/:city">
            <Activity />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/:city">
            <Home />
          </Route>
          <Route exact path="*">
            <div>
              <h1>404 Page not found</h1>
            </div>
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
