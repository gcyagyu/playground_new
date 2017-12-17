import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Main from './components/Main';
import RechartGraphRadar from './components/RechartGraphRadar';
import RechartPieChart from './components/RechartPieChart';
import Fetch from './components/Fetch';
import ObjectAssign from './components/ObjectAssign';
import OnDrop from './components/DropZone';

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Main}
      />
      <Route
        exact
        path="/rechartgraphradar"
        component={RechartGraphRadar}
      />
      <Route
        exact
        path="/fetch"
        component={Fetch}
      />
      <Route
        exact
        path="/rechartpiechart"
        component={RechartPieChart}
      />
      <Route
        exact
        path="/objectassign"
        component={ObjectAssign}
      />
      <Route
        exact
        path="/dropzone"
        component={OnDrop}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
