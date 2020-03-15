import React, {Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import Alert from 'react-bootstrap/Alert';

import {AppHeader} from './app-styles.js';
import Router from '../../routing/router.js';

function AppView() {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <AppHeader>{t('Lexicons Byzantine Law and Acts')}</AppHeader>
      <Router />
    </React.Fragment>
  );
};

// component for suspense fallback
function AppLoader() {
  return (<Alert variant="secondary">Loading...</Alert>);
};

export default function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <AppView />
    </Suspense>
  );
}
