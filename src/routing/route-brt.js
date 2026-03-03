import React from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {BriefPanel} from '../components/panel/panel.js';
import ShowBrt from './show-brt/show-brt.js';
import RouteWord from './route-word.js';

function Route_BRT({match}) {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>{t('Receptions and transliterations')}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowBrt} />
      <Route path={`${match.path}/:word`} component={RouteWord} />
    </React.Fragment>
  );
}

export default Route_BRT;
