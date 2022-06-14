import React from 'react';

import {Panel, PanelHeader} from '../panel/panel.js';
import {Option} from './choice-styles.js'

function Choice({title, children, wrapLink, WrapItem}) {
  if ((!children) || (!wrapLink)) {
    return null;
  }

  if (!WrapItem) {
    WrapItem = ({children}) => children.name;
  }

  return (
    <Panel border="primary">
      <PanelHeader bg="primary">{title}</PanelHeader>
      {
        children.map((item, index) => wrapLink(
          item, 
          <Option><WrapItem index={index}>{item}</WrapItem></Option>
        ))
      }
    </Panel>
  );
};

export default Choice;
