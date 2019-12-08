import React from 'react';
import {Route} from 'react-router-dom';

import ChoiceMode from './choice-mode/choice-mode.js';
import RouteIntegral from './route-integral.js';
import RouteAlone from './route-alone.js';
import RouteOperations from './route-operations.js';

function RouteRoot() {
  return (
    <React.Fragment>
      <Route path="/" exact component={ChoiceMode} />
      <Route path="/route/integral" component={RouteIntegral} />
      <Route path="/route/alone" component={RouteAlone} />
      <Route path="/route/operations" component={RouteOperations} />
    </React.Fragment>
  );
};

export default RouteRoot;
