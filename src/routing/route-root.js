import React from 'react';
import {Route} from 'react-router-dom';

import ChoiceMode from './choice-mode/choice-mode.js';
import RouteIntegral from './route-integral.js';
import RouteAlone from './route-alone.js';
import RouteOperations from './route-operations.js';
import Route_BRT from './route-brt.js';

function RouteRoot() {
  return (
    <React.Fragment>
      <Route path="/" exact component={ChoiceMode} />
      <Route path="/route/integral" component={RouteIntegral} />
      <Route path="/route/alone" component={RouteAlone} />
      <Route path="/route/operations" component={RouteOperations} />
      <Route path="/route/brt" component={Route_BRT} />
    </React.Fragment>
  );
};

export default RouteRoot;
