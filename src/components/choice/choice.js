import React from 'react';

import {Panel, PanelHeader} from '../panel/panel.js';
import {Option} from './choice-styles.js'

function Choice({title, children, wrapLink}) {
  if ((!children) || (!wrapLink)) {
    return null;
  }

  return (
    <Panel border="primary">
      <PanelHeader bg="primary">{title}</PanelHeader>
      {children.map(item => wrapLink(item, <Option>{item.name}</Option>))}
    </Panel>
  );
};

export default Choice;
