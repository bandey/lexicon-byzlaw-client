import React from 'react';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceLingua({title, match, onChoose}) {
  function wrapLink(item, Child) {
    const onClick = onChoose ? () => onChoose(item) : null;
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title={title} wrapLink={wrapLink}>
      {[
        {id: 'lat', name: 'Latin'},
        {id: 'gre', name: 'Greek'},
        {id: 'cyr', name: 'Slavonic'},
        {id: 'gla', name: 'Glagolitic'},
        {id: 'mix', name: 'Mixed'},
      ]}
    </Choice>
  );
};

export default ChoiceLingua;
