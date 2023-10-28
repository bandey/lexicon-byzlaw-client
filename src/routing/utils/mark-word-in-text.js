import React from 'react';

import {SpanPolyglot} from '../../styles/polyglot.js';

// Split given text to blocks, where blocks with given word are marked
// param whole:Boolean 
//   true - search word embraced by spaces
//   false - search word as is
// return [JSX.Element] array of text blocks
function markWordInText(word, text, whole = true) {
  if (!text) return '';
  if (!word) return (<SpanPolyglot whiteSpace>{text}</SpanPolyglot>);

  let blocks = [];

  const len = word.length;
  const searched = (whole) ? (' ' + word + ' ') : word;
  const delta = (whole) ? 1 : 0;

  let phrase = '';
  let key = 0;
  let old = 0;

  let pos = text.indexOf(searched);
  while (pos >= 0) {
    phrase = text.substring(old, pos + delta); // beg, excluded end
    if (phrase) {
      blocks.push(<SpanPolyglot key={++key} whiteSpace>{phrase}</SpanPolyglot>);
    }

    phrase = text.substr(pos + delta, len); // beg, len
    blocks.push(<SpanPolyglot key={++key} whiteSpace marked>{phrase}</SpanPolyglot>);

    old = pos + delta + len;
    pos = text.indexOf(searched, old);
  }

  phrase = text.substring(old);
  if (phrase) {
    blocks.push(<SpanPolyglot key={++key} whiteSpace>{phrase}</SpanPolyglot>);
  }

  return blocks;
}

export default markWordInText;
