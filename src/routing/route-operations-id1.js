import React from 'react';
import {Route, Link} from 'react-router-dom';

import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId2 from './route-operations-id2.js';

function RouteOperationsId1({match}) {
  return (
    <React.Fragment>
      <Link to="/route/operations">
        <BriefPanel>{match.params.id}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceOpus} />
      <Route path={`${match.path}/:id`} component={RouteOperationsId2} />
    </React.Fragment>
  );
};

export default RouteOperationsId1;
