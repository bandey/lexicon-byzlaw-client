import React from 'react';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceOpus() {
  function wrapLink(id, Child) {
    return (
      <Link key={id} to={`${id}`}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title="Choose lexicon" wrapLink={wrapLink}>
      {[
        {id: 'svge', name: 'Valdemar. Von Zelenden'},
        {id: 'svla', name: 'Valdemar. De decimis'},
      ]}
    </Choice>
  );
};

export default ChoiceOpus;
