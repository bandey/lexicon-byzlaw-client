import React from 'react';
import {useTranslation} from 'react-i18next';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';

function LangSelector() {
  const {t, i18n} = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownButton id="langSelector" title={t('$Language')} variant="info">
      <DropdownItem as="button" onClick={() => changeLang('en')}>english</DropdownItem>
      <DropdownItem as="button" onClick={() => changeLang('ru')}>русский</DropdownItem>
    </DropdownButton>
  );
};

export default LangSelector;
