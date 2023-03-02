import React from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

// import {Capitalize} from './show-product-styles.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconOperation} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowProduct({match}) {
  const queryLexiconOperation = getLexiconOperation(
    match.params.operation,
    match.params.opusId1,
    match.params.opusId2,
  );

  function WrapLink({item, children}) {
    return (
      <Link key={item.w} to={`${match.url}/` + strictUriEncode(item.w)}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    return (<Lexicon mode='lexicon3' WrapLink={WrapLink} {...props} />);
  };

  return (
    <DataProvider query={queryLexiconOperation}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowProduct;
