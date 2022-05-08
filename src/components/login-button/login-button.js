import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import {StoreContext} from '../../store/store.js';

function LoginButton() {
  const {t, i18n} = useTranslation();
  const {userEmail, setUserEmail} = useContext(StoreContext);
  const currentOrigin = window.location.protocol + '//' + window.location.host;

  useEffect(() => {
    window.addEventListener('message', handleMessageEvent);
    return () => {
      window.removeEventListener('message', handleMessageEvent);
    };
  }, []); // run an effect and clean it up only once (on mount and unmount)

  function handleMessageEvent(event) {
    if ((event.origin === currentOrigin) && (event.data === 'doneAuth')) {
      fetch('/auth/check', {headers: {'Accept': 'application/json'}})
        .then(response => response.json())
        .then(user => setUserEmail(user.email))
        .catch(err => console.log(err));
    }
  };

  function enterCabinet() {
    const lang = i18n.language.split('-')[0] || 'en';
    window.open('/auth?lang=' + lang, '_blank').focus();
  };

  function exitCabinet() {
    fetch('/auth/exit', {headers: {'Accept': 'application/json'}})
      .then(response => response.json())
      .then(user => setUserEmail(user.email))
      .catch(err => console.log(err));
  };

  if (userEmail) {
    return (
      <Dropdown>
        <Dropdown.Toggle id="cabinetButton" variant="info" style={{'width': '100%'}}>
          {t('Cabinet')}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{'min-width': '100%'}}>
          <Dropdown.Item as="button">{userEmail}</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => exitCabinet()}>{t('Exit')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return (
      <Button variant="info" style={{'width': '100%'}} onClick={() => enterCabinet()}>
        {t('Login')}
      </Button>
    );
  }
};

export default LoginButton;
