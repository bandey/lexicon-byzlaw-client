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
        {id: 'conjunction', name: 'Conjunction'},
        {id: 'disjunction', name: 'Disjunction'},
        {id: 'abjunction12', name: 'Abjunction 1 \\ 2'},
        {id: 'abjunction21', name: 'Abjunction 2 \\ 1'},
      ]}
    </Choice>
  );
};

export default ChoiceOperation;
