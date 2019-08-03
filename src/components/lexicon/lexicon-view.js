import React from 'react';

import {Panel} from '../panel/panel.js';
import {PanelHeaderForList} from './lexicon-styles.js';
import {Row, ColWord, ColCount} from './row/lexicon-row-styles.js';
import LexiconList from './list/lexicon-list.js';
import createLexiconRow from './row/lexicon-row-factory.js';

function Lexicon({data}) {
  const LexiconRow = createLexiconRow(data);

  return (
    <Panel border="primary" squareCorner>
      <PanelHeaderForList bg="primary">
        <Row noHover>
          <ColWord>Word</ColWord>
          <ColCount>Qty</ColCount>
        </Row>
      </PanelHeaderForList>
      <LexiconList itemCount={data.length}>
        {LexiconRow}
      </LexiconList>
    </Panel>
  );
};

export default Lexicon;
