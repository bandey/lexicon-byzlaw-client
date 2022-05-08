import React from 'react';
import {useTranslation} from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';

function LangSelector() {
  const {t, i18n} = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="langSelector" variant="info" style={{'width': '100%'}}>
        &#127758;
        {' ' + t('$LangShort')}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{'min-width': '100%'}}>
        <Dropdown.Item as="button" onClick={() => changeLang('en')}>english</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => changeLang('ru')}>русский</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LangSelector;
