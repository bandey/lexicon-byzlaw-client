import React, {Suspense} from 'react';
import Alert from 'react-bootstrap/Alert';

import AppHeader from './header/app-header.js';
import FontPromoter from '../font-promoter/font-promoter.js';
import Router from '../../routing/router.js';

function AppView() {
  return (
    <React.Fragment>
      <AppHeader />
      <FontPromoter />
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
