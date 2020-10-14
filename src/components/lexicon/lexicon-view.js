import React from 'react';
import {useTranslation} from 'react-i18next';

import {Panel} from '../panel/panel.js';
import {PanelHeaderForList} from './lexicon-styles.js';
import {Row, ColWord, ColCount} from './row/lexicon-row-styles.js';
import LexiconList from './list/lexicon-list.js';
import createLexiconRow from './row/lexicon-row-factory.js';

function Lexicon({data, WrapLink}) {
  if (!WrapLink) {
    WrapLink = ({children}) => children;
  }

  const {t} = useTranslation();

  let headerRow, lexiconRow;

  if ((data) && (data[0]) && ((data[0].c1) || (data[0].c2))) { // 3 columns
    headerRow = (
      <Row noHover>
        <ColWord>{t('Word')}</ColWord>
        <ColCount>{t('Qty1')}</ColCount>
        <ColCount>{t('Qty2')}</ColCount>
      </Row>
    );
    lexiconRow = createLexiconRow(data, 'c1', 'c2', WrapLink);
  } else { // 2 columns
    headerRow = (
      <Row noHover>
        <ColWord>{t('Word')}</ColWord>
        <ColCount>{t('Qty')}</ColCount>
      </Row>
    );
    lexiconRow = createLexiconRow(data, 'c', null, WrapLink);
  }

  return (
    <Panel border="primary" squareCorner>
      <PanelHeaderForList bg="primary">
        {headerRow}
      </PanelHeaderForList>
      <LexiconList itemCount={data.length}>
        {lexiconRow}
      </LexiconList>
    </Panel>
  );
};

export default Lexicon;
