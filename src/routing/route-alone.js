import React from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {BriefPanel} from '../components/panel/panel.js'
import RouteRubrication from './route-rubrication.js';

function RouteAlone({match}) {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>{t('Ad fontes')}</BriefPanel>
      </Link>
      <Route path={match.path} component={RouteRubrication} />
    </React.Fragment>
  );
};

export default RouteAlone;
