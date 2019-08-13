import React from 'react';
import {Route} from 'react-router-dom';

import RouteAlone from './route-alone.js';
import ChoiceMode from './choice-mode/choice-mode.js';

function RouteRoot() {
  return (
    <React.Fragment>
      <Route path="/" exact component={ChoiceMode} />
      <Route path="/route/alone" component={RouteAlone} />
    </React.Fragment>
  );
};

export default RouteRoot;
