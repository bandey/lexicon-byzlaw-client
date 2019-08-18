import React from 'react';
import {Link} from 'react-router-dom';

import DataProvider from '../../data-provider/data-provider.js';
import {getOpusAll} from '../../data-provider/data-provider-queries.js';
import Choice from '../../components/choice/choice.js';

const queryOpusAll = getOpusAll();

function ChoiceOpus({title, match}) {
  function wrapLink(id, Child) {
    return (
      <Link key={id} to={`${match.url}/${id}`}>
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
