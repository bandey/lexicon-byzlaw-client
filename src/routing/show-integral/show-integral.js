import React from 'react';
import {Link} from 'react-router-dom';

import {BriefPanel} from '../../components/panel/panel.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconIntegral} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

const queryLexiconIntegral = getLexiconIntegral();

function ShowIntegral() {
  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>Integral lexicon</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconIntegral}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowIntegral;
