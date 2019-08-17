import React from 'react';
import {Route, Link} from 'react-router-dom';

import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId1 from './route-operations-id1.js';

function RouteOperations({match}) {
  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>Operations</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceOpus} />
      <Route path={`${match.path}/:id1`} component={RouteOperationsId1} />
    </React.Fragment>
  );
};

export default RouteOperations;
