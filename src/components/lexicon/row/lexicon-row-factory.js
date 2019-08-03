import React from 'react';

function createLexiconRow(data) {
  return function LexiconRow({index, style}) {
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
};

export default createLexiconRow;
