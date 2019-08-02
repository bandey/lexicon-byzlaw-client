import React from 'react';

import {AppHeader} from './app-styles.js';
import Lexicon from '../lexicon/lexicon.js';

function App() {
  return (
    <React.Fragment>
      <AppHeader>Lexicon Byzantine Law and Acts</AppHeader>
      <Lexicon />
    </React.Fragment>
  );
};

export default App;
