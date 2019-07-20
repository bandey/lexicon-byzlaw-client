import React from 'react';

import Lexicon from './lexicon-view.js';

const data = [
  {w: 'one', c: '1'},
  {w: 'two', c: '2'},
  {w: 'three', c: '3'},
];

export default function LexiconData(props) {
  return (
    <Lexicon data={data} {...props} />
  );
};
