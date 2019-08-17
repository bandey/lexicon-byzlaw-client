import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconAlone} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowLexicon({match}) {
  const queryLexiconAlone = getLexiconAlone(match.params.id);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{match.params.id}</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconAlone}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowLexicon;
