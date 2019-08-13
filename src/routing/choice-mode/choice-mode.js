import React from 'react';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceMode() {
  function wrapLink(id, Child) {
    return (
      <Link key={id} to={`/route/${id}`}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title="Choose action" wrapLink={wrapLink}>
      {[
        {id: 'integral', name: 'Integral lexicon'},
        {id: 'alone', name: 'Ad fontes'},
      ]}
    </Choice>
  );
};

export default ChoiceMode;
