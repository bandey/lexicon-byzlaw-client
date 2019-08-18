import React from 'react';

import {Panel} from '../panel/panel.js';
import {PanelHeaderForList} from './lexicon-styles.js';
import {Row, ColWord, ColCount} from './row/lexicon-row-styles.js';
import LexiconList from './list/lexicon-list.js';
import createLexiconRow from './row/lexicon-row-factory.js';

function Lexicon({data}) {
  let headerRow, lexiconRow;

  if ((data) && (data[0]) && ((data[0].c1) || (data[0].c2))) { // 3 columns
    headerRow = (
      <Row noHover>
        <ColWord>Word</ColWord>
        <ColCount>Qty1</ColCount>
        <ColCount>Qty2</ColCount>
      </Row>
    );
    lexiconRow = createLexiconRow(data, 'c1', 'c2');
  } else { // 2 columns
    headerRow = (
      <Row noHover>
        <ColWord>Word</ColWord>
        <ColCount>Qty</ColCount>
      </Row>
    );
    lexiconRow = createLexiconRow(data, 'c', null);
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
