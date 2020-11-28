import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import ShowIntegral from './show-integral/show-integral.js';
import RouteChapters from './route-chapters.js';

function RouteIntegralWord({match}) {
  const {t} = useTranslation();
  const {linguaId} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{t(`$linguaNames.${linguaId}`)}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowIntegral} />
      <Route path={`${match.path}/:word`} component={RouteChapters} />
    </React.Fragment>
  );
};

export default RouteIntegralWord;
