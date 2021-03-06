import React from 'react';
import { Switch, Route, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import paths from './paths';
import App from "../views/index/App";

const { ConnectedRouter } = routerRedux;

function RouterIndex({ history, app, location }) {
  const routes = paths;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/*<Route exact path="/" render={() => <Redirect to="/cc/manager/productDetailTemplate" push />} />*/}
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterIndex;
