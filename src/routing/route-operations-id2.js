import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOperation from './choice-operation/choice-operation.js';
import ShowProduct from './show-product/show-product.js';

function RouteOperationsId2({match}) {
  const {opusName2} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{`2: ${opusName2}`}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceOperation} />
      <Route path={`${match.path}/:operation`} component={ShowProduct} />
    </React.Fragment>
  );
};


export default RouteOperationsId2;
