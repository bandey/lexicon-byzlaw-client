import React from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconAlone} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowLexicon({match}) {
  const queryLexiconAlone = getLexiconAlone(match.params.id);

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
    <DataProvider query={queryLexiconAlone}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowLexicon;
