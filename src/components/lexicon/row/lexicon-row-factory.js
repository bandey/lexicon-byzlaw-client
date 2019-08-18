import React from 'react';

import {Row, ColWord, ColCount} from './lexicon-row-styles.js';

function createLexiconRow(data, c1, c2) {
  return function LexiconRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };

    const colCount2 = c2 ? (<ColCount>{row[c2]}</ColCount>) : null;

    return (
      <Row style={style}>
        <ColWord>{row.w}</ColWord>
        <ColCount>{row[c1]}</ColCount>
        {colCount2}
      </Row>
    );
  };
};

export default createLexiconRow;
