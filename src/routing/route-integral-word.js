import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import ShowIntegral from './show-integral/show-integral.js';
import ShowFoundChapters from './show-found-chapters/show-found-chapters.js';

function RouteIntegralWord({match}) {
  const {t} = useTranslation();
  const {linguaId} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{t(`$linguaNames.${linguaId}`)}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowIntegral} />
      <Route path={`${match.path}/:word`} component={ShowFoundChapters} />
    </React.Fragment>
  );
};

export default RouteIntegralWord;
