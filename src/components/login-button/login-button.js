import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import {StoreContext} from '../../store/store.js';

function LoginButton() {
  const {t} = useTranslation();
  const {userEmail, setUserEmail} = useContext(StoreContext);

  function enterCabinet() {
    setUserEmail('user@mail.com');
  };

  function exitCabinet() {
    setUserEmail('');
  };

  if (userEmail) {
    return (
      <Dropdown>
        <Dropdown.Toggle id="cabinetButton" variant="info" style={{'width': '100%'}}>
          {t('Cabinet')}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{'width': '100%'}}>
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
