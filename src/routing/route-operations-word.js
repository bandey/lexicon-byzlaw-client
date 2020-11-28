import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import ShowProduct from './show-product/show-product.js';
import RouteChapters from './route-chapters.js';

function RouteIntegralWord({match}) {
  const {t} = useTranslation();
  const {operationId} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{t(`$operationNames.${operationId}`)}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowProduct} />
      <Route path={`${match.path}/:word`} component={RouteChapters} />
    </React.Fragment>
  );
};

export default RouteIntegralWord;
