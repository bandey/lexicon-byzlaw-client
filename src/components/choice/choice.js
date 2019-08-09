import React from 'react';

import {Panel, PanelHeader} from '../panel/panel.js';
import {Option} from './choice-styles.js'

function Choice({title, children}) {
  if (!children) {
    return null;
  }

  return (
    <Panel border="primary">
      <PanelHeader bg="primary">
        {title}
      </PanelHeader>
      {children.map(item => <Option key={item.id}>{item.name}</Option>)}
    </Panel>
  );
};

export default Choice;
