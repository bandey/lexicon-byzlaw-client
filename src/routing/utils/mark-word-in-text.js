import React from 'react';

import {SpanPolyglot} from '../../styles/polyglot.js';

// Split given text to blocks, where blocks with given word are marked
// return [JSX.Element] array of text blocks
function markWordInText(word, text) {
  if (!text) return '';
  if (!word) return (<SpanPolyglot whiteSpace>{text}</SpanPolyglot>);

  let blocks = [];

  const len = word.length;
  let phrase = '';
  let key = 0;
  let old = 0;

  let pos = text.indexOf(' ' + word + ' ');
  while (pos >= 0) {
    phrase = text.substring(old, pos+1); // beg, end
    if (phrase) {
      blocks.push(<SpanPolyglot key={++key} whiteSpace>{phrase}</SpanPolyglot>);
    }

    phrase = text.substr(pos+1, len); // beg, len
    blocks.push(<SpanPolyglot key={++key} whiteSpace marked>{phrase}</SpanPolyglot>);

    old = pos + 1 + len;
    pos = text.indexOf(' ' + word + ' ', old);
  }

  phrase = text.substring(old);
  if (phrase) {
    blocks.push(<SpanPolyglot key={++key} whiteSpace>{phrase}</SpanPolyglot>);
  }

  return blocks;
}

export default markWordInText;
