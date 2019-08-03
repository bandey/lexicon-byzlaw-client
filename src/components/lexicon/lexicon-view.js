import React from 'react';

import {Panel, PanelHeader} from '../panel/panel.js';
import LexiconList from './list/lexicon-list.js';

function Lexicon({data}) {
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
      <LexiconList itemCount={data.length}>
        {renderRow}
      </LexiconList>
    </Panel>
  );
};

export default Lexicon;
