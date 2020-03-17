import React from 'react';
import {useTranslation} from 'react-i18next';
import Row from 'react-bootstrap/Row';

import {ColTitle, Title, ColLang} from './app-header-styles.js';
import LangSelector from '../../lang-selector/lang-selector.js';

function AppHeader() {
  const {t} = useTranslation();

  return (
    <Row>
      <ColTitle md={9}>
        <Title>{t('$Lexicons title')}</Title>
      </ColTitle>
      <ColLang md={3}>
        <LangSelector />
      </ColLang>
    </Row>
  );
};

export default AppHeader;
