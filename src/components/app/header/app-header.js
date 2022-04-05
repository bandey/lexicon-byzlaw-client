import React from 'react';
import {useTranslation} from 'react-i18next';
import Row from 'react-bootstrap/Row';

import {ColTitle, Title, ColLang} from './app-header-styles.js';
import LangSelector from '../../lang-selector/lang-selector.js';
import LoginButtom from '../../login-button/login-button.js';

function AppHeader() {
  const {t} = useTranslation();

  return (
    <Row>
      <ColTitle md={8}>
        <Title>{t('$Lexicons title')}</Title>
      </ColTitle>
      <ColLang md={2}>
        <LangSelector />
      </ColLang>
      <ColLang md={2}>
        <LoginButtom />
      </ColLang>
    </Row>
  );
};

export default AppHeader;
