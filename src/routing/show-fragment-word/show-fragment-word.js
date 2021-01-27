import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';
import InfoChapterWord from 
  '../../components/info-chapter-word/info-chapter-word.js';

function ShowFragmentWord({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.fragment_id}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <InfoChapterWord data={{
        opus: 'OPUS',
        word: match.params.word,
        name: match.params.fragment_id,
        count: 'COUNT',
      }} />
    </React.Fragment>
  );
};

export default ShowFragmentWord;
