import React from 'react';
import {Route, Switch} from 'react-router-dom';

import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import ShowRubric from './show-rubric/show-rubric.js';
import ChoiceRubric from './choice-rubric/choice-rubric.js';
import RouteAloneOpus from './route-alone-opus.js';

function RouteRubrication({match}) {
  const rubricId = match.params.rubricId || 0;

  return (
    <React.Fragment>
      <ShowRubric rubricId={rubricId} linkTo={delLastElemFromURL(match.url)} />
      <Switch>
        <Route exact path={match.path} component={ChoiceRubric} />
        <Route path={`${match.path}/opus/:opusId`} component={RouteAloneOpus} />
        <Route path={`${match.path}/:rubricId`} component={RouteRubrication} />
      </Switch>
    </React.Fragment>
  );
};

export default RouteRubrication;
