import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
// import DataProvider from '../../data-provider/data-provider.js';
// import {getChaptersWithWord} from '../../data-provider/data-provider-queries.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';

function ShowChapterWord({match}) {
  const {chapterName} = useContext(StoreContext);
  // const queryChaptersWithWord = 
  //   getChaptersWithWord(match.params.word, match.params.id);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{chapterName}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <SpanPolyglot>{match.params.chapter_id} - {match.params.word}</SpanPolyglot>
    </React.Fragment>
  );
};

export default ShowChapterWord;
