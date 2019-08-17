import React from 'react';
import {Route} from 'react-router-dom';

import RouteAlone from './route-alone.js';
import ChoiceMode from './choice-mode/choice-mode.js';
import ShowIntegral from './show-integral/show-integral.js';
import RouteOperations from './route-operations.js';

function RouteRoot() {
  return (
    <React.Fragment>
      <Route path="/" exact component={ChoiceMode} />
      <Route path="/route/integral" component={ShowIntegral} />
      <Route path="/route/alone" component={RouteAlone} />
      <Route path="/route/operations" component={RouteOperations} />
    </React.Fragment>
  );
};

export default RouteRoot;
