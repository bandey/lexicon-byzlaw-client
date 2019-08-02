import React from 'react';
import {FixedSizeList as List} from 'react-window';

import {Panel, PanelHeader} from '../panel/panel.js';

function Lexicon({data}) {
  const rowHeight = 40;

  const dataHeight = data.length * rowHeight;
  let listHeight = Math.floor(document.documentElement.clientHeight * 0.7);
  if (listHeight > dataHeight) {
    listHeight = dataHeight;
  }

  function renderRow({index, style}) {
    const row = data[index];
    if (!row) {
      return null;
    };
    return (
      <div style={{
        display: 'flex', 
        paddingLeft: '1.25rem', 
        alignItems: 'center', 
        ...style
      }}>
        <span>{row.w} - {row.c}</span>
      </div>
    );
  };

  return (
    <Panel border="primary" squareCorner>
      <PanelHeader bg="primary">Header</PanelHeader>
      <List
        width="100%"
        height={listHeight}
        itemSize={rowHeight}
        itemCount={data.length}
      >
        {renderRow}
      </List>
    </Panel>
  );
};

export default Lexicon;
