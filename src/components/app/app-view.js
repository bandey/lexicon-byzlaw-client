import React from 'react';

import {AppHeader} from './app-styles.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconIntegral} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../lexicon/lexicon.js';

const queryLexiconIntegral = getLexiconIntegral();

function App() {
  return (
    <React.Fragment>
      <AppHeader>Lexicon Byzantine Law and Acts</AppHeader>
      <DataProvider query={queryLexiconIntegral}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default App;
