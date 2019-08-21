import React from 'react';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceOperation({match}) {
  function wrapLink({id}, Child) {
    return (
      <Link key={id} to={`${match.url}/${id}`}>
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
