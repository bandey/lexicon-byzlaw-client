import React from 'react';

import {AppHeader} from './app-styles.js';
import Router from '../../routing/router.js';

function App() {
  return (
    <React.Fragment>
      <AppHeader>Lexicons Byzantine Law and Acts</AppHeader>
      <Router />
    </React.Fragment>
  );
};

export default App;
