import React from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconAlone} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowLexicon({match}) {
  const queryLexiconAlone = getLexiconAlone(match.params.id);

  return (
    <React.Fragment>
      <Link to="/">
        <Alert variant="info">{match.params.id}</Alert>
      </Link>
      <DataProvider query={queryLexiconAlone}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowLexicon;
