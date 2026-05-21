import React from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

import DataProvider from '../../data-provider/data-provider.js';
import {getBrtWords} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowBrt({match}) {
  const queryBrtWords = getBrtWords();

  function WrapLink({item, children}) {
    return (
      <Link key={item.w} to={`${match.url}/` + strictUriEncode(item.w)}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    return (<Lexicon mode='lexicon2' WrapLink={WrapLink} {...props} />);
  };

  return (
    <DataProvider query={queryBrtWords}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowBrt;
