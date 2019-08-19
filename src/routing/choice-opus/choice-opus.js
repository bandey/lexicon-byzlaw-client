import React from 'react';
import {Link} from 'react-router-dom';

import DataProvider from '../../data-provider/data-provider.js';
import {getOpusAll} from '../../data-provider/data-provider-queries.js';
import Choice from '../../components/choice/choice.js';

const queryOpusAll = getOpusAll();

function ChoiceOpus({title, match, onChoose}) {
  function wrapLink(item, Child) {
    const onClick = onChoose ? () => onChoose(item) : null;
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {Child}
      </Link>
    );
  };

  function AdapterChoice({data}) {
    return (
      <Choice title={title} wrapLink={wrapLink}>
        {data}
      </Choice>
    );
  };

  return (
    <DataProvider query={queryOpusAll}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ChoiceOpus;
