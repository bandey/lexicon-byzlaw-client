import React from 'react';
import {FixedSizeList as List} from 'react-window';

function LexiconList({itemCount, children}) {
  const rowHeight = 40;

  const dataHeight = itemCount * rowHeight;

  let listHeight = Math.floor(document.documentElement.clientHeight * 0.7);
  if (listHeight > dataHeight) {
    listHeight = dataHeight;
  }

  return (
    <List
      width="100%"
      height={listHeight}
      itemSize={rowHeight}
      itemCount={itemCount}
    >
      {children}
    </List>
  );
};

export default LexiconList;
