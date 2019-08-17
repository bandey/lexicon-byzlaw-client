import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'
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
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{match.params.operation}</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconOperation}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowProduct;
