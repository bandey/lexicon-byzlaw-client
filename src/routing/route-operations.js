import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId1 from './route-operations-id1.js';

function RouteOperations({match}) {
  const {setOpusName1} = useContext(StoreContext);

  function ChoiceLexicon(props) {
    return (
      <ChoiceOpus 
        title="Choose lexicon 1"
        onChoose={(item) => setOpusName1(item.name)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>Operations</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLexicon} />
      <Route path={`${match.path}/:id1`} component={RouteOperationsId1} />
    </React.Fragment>
  );
};

export default RouteOperations;