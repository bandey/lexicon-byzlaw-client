import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOperation from './choice-operation/choice-operation.js';
import ShowProduct from './show-product/show-product.js';

function RouteOperationsId2({match}) {
  const {t} = useTranslation();
  const {opusName2, operationId, setOperationId} = useContext(StoreContext);

  function ChoiceOperationWrapper(props) {
    return (
      <ChoiceOperation
        onChoose={(item) => setOperationId(item.id)}
        {...props}
      />
    );
  };

  function ShowProductWrapper(props) {
    return (
      <ShowProduct 
        operationName={t(`$operationNames.${operationId}`)}
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
      <Route path={`${match.path}/:operation`} component={ShowProductWrapper} />
    </React.Fragment>
  );
};


export default RouteOperationsId2;
