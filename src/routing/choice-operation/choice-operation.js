import React from 'react';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceOperation({match, onChoose}) {
  function wrapLink(item, Child) {
    const onClick = onChoose ? () => onChoose(item) : null;
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title="Choose operation" wrapLink={wrapLink}>
      {[
        {id: 'intersection', name: 'Intersection 1 ∩ 2'},
        {id: 'union', name: 'Union 1 ∪ 2'},
        {id: 'difference12', name: 'Set difference 1 \\ 2'},
        {id: 'difference21', name: 'Set difference 2 \\ 1'},
      ]}
    </Choice>
  );
};

export default ChoiceOperation;
