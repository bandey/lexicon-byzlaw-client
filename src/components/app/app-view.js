import React, {Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {AppHeader} from './app-styles.js';
import LangSelector from '../lang-selector/lang-selector.js';
import Router from '../../routing/router.js';

function AppView() {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <Row>
        <Col md={9}>
          <AppHeader>{t('$Lexicons title')}</AppHeader>
        </Col>
        <Col md={3}>
          <LangSelector />
        </Col>
      </Row>
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
