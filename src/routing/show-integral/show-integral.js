import React from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconIntegral} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowIntegral({match}) {
  const queryLexiconIntegral = getLexiconIntegral(match.params.lingua);

  function WrapLink({item, children}) {
    return (
      <Link key={item.w} to={`${match.url}/` + strictUriEncode(item.w)}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    const WrapLink = ({children}) => children;
    return (<Lexicon WrapLink={WrapLink} {...props} />);
  };

  return (
    <DataProvider query={queryLexiconIntegral}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowIntegral;
