import React from 'react';
import {useTranslation} from 'react-i18next';

import {Panel, PanelHeader} from '../panel/panel.js';
import {Option} from './additions-board-styles.js';

function AdditionsBoard() {
  const {t} = useTranslation();

  const additionsItems = [
    (
      <Option key={1}>
      <a href={t('$ExpertSystem url') + '/?' + t('$LangParam')}>{t('$ExpertSystem name')}</a>
      </Option>
    ),
    (
      <Option key={2}>
      <a href={t('$Thesaurus url') + '/?' + t('$LangParam')}>{t('$Thesaurus name')}</a>
      </Option>
    ),
  ];

  return (
    <Panel>
      <PanelHeader bg="light">{t('Additions')}</PanelHeader>
      {additionsItems}
    </Panel>
  );
};

export default AdditionsBoard;
