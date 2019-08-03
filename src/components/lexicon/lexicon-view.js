import React from 'react';

import {Panel, PanelHeader} from '../panel/panel.js';
import LexiconList from './list/lexicon-list.js';
import createLexiconRow from './row/lexicon-row-factory.js';

function Lexicon({data}) {
  const LexiconRow = createLexiconRow(data);

  return (
    <Panel border="primary" squareCorner>
      <PanelHeader bg="primary">Header</PanelHeader>
      <LexiconList itemCount={data.length}>
        {LexiconRow}
      </LexiconList>
    </Panel>
  );
};

export default Lexicon;
