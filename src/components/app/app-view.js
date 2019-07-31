import React from 'react';

import Lexicon from '../lexicon/lexicon.js';

function App() {
  return (
    <React.Fragment>
      <h1 style={{marginTop: '1rem', marginBottom: '1rem', fontSize: '1.5rem',}}>
        Lexicon Byzantine Law and Acts
      </h1>
      <Lexicon />
    </React.Fragment>
  );
};

export default App;
