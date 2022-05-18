import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOperation from './choice-operation/choice-operation.js';
import RouteOperationsOper from './route-operations-oper.js';

function RouteOperationsId2({match}) {
  const {opusName2, setOperationId} = useContext(StoreContext);

  function ChoiceOperationWrapper(props) {
    return (
      <ChoiceOperation
        onChoose={(item) => setOperationId(item.id)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{`2: ${opusName2}`}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceOperationWrapper} />
      <Route path={`${match.path}/:operation`} component={RouteOperationsOper} />
    </React.Fragment>
  );
};


export default RouteOperationsId2;
