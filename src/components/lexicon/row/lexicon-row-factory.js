import React from 'react';

import {Row, ColWord, ColCount} from './lexicon-row-styles.js';

function createLexiconRow(data) {
  return function LexiconRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };

    return (
      <Row style={style}>
        <ColWord>{row.w}</ColWord>
        <ColCount>{row.c}</ColCount>
      </Row>
    );
  };
};

export default createLexiconRow;
