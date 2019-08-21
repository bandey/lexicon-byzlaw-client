import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'
// import {Capitalize} from './show-product-styles.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconOperation} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowProduct({operationName, match}) {
  const queryLexiconOperation = getLexiconOperation(
    match.params.operation,
    match.params.id1,
    match.params.id2,
  );

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{operationName}</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconOperation}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowProduct;
