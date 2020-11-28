import React from 'react';
import {Link} from 'react-router-dom';

// import {Capitalize} from './show-product-styles.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconOperation} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowProduct({match}) {
  const queryLexiconOperation = getLexiconOperation(
    match.params.operation,
    match.params.id1,
    match.params.id2,
  );

  return (
    <DataProvider query={queryLexiconOperation}>
      {Lexicon}
    </DataProvider>
  );
};

export default ShowProduct;
