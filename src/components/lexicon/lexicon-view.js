import React from 'react';

import { FixedSizeList as List } from 'react-window';

function Lexicon({data}) {
  const rowHeight = 40;

  function renderRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };
    return (
      <div style={style}>
        <span>{row.w} - {row.c}</span>
      </div>
    );
  };

  return (
    <List
      width="100%"
      height={rowHeight * 10}
      itemSize={rowHeight}
      itemCount={data.length}
    >
      {renderRow}
    </List>
  );
};

export default Lexicon;
