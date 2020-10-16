import React from 'react';

import {Row, ColWord, ColCount, ColOpus, ColChapter} from './lexicon-row-styles.js';

function createLexiconRow(data, c1, c2, WrapLink) {
  return function LexiconRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };

    const colCount2 = c2 ? (<ColCount>{row[c2]}</ColCount>) : null;

    return (
      <WrapLink item={row}>
        <Row style={style}>
          <ColWord>{row.w}</ColWord>
          <ColCount>{row[c1]}</ColCount>
          {colCount2}
        </Row>
      </WrapLink>
    );
  };
};

function createFoundChaptersRow(data, WrapLink) {
  return function FoundChaptersRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };

    return (
      <WrapLink item={row}>
        <Row style={style}>
          <ColOpus>{row.opus}</ColOpus>
          <ColChapter>{row.name}</ColChapter>
        </Row>
      </WrapLink>
    );
  };
};

export {createLexiconRow, createFoundChaptersRow};
