import React from 'react';
import {Route, Link} from 'react-router-dom';

import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId2 from './route-operations-id2.js';

function RouteOperationsId1({match}) {
  function ChoiceLexicon(props) {
    return <ChoiceOpus title="Choose lexicon 2" {...props} />;
  };

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{match.params.id1}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLexicon} />
      <Route path={`${match.path}/:id2`} component={RouteOperationsId2} />
    </React.Fragment>
  );
};

export default RouteOperationsId1;
