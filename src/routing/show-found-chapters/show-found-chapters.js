import React from 'react';
import {Link} from 'react-router-dom';

import DataProvider from '../../data-provider/data-provider.js';
import {getChaptersWithWord} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';

function ShowFoundChapters({match}) {
  const queryChaptersWithWord = 
    getChaptersWithWord(match.params.word, match.params.id);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.word}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <DataProvider query={queryChaptersWithWord}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowFoundChapters;
