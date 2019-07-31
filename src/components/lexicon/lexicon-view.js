import React from 'react';

import Card from 'react-bootstrap/Card';
import { FixedSizeList as List } from 'react-window';

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
    <Card border="primary" style={{marginBottom: '1rem', borderBottomRightRadius: '0'}}>
      <Card.Header className="bg-primary text-white">Header</Card.Header>
      <List
        width="100%"
        height={listHeight}
        itemSize={rowHeight}
        itemCount={data.length}
      >
        {renderRow}
      </List>
    </Card>
  );
};

export default Lexicon;
