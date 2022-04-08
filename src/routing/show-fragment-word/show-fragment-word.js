import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';
import InfoChapterWord from 
  '../../components/info-chapter-word/info-chapter-word.js';
import ChoiceBonus from '../choice-bonus/choice-bonus.js';

function ShowFragmentWord({match}) {
  const {fragmOpus, fragmCount} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(delLastElemFromURL(match.url))}>
        <BriefPanel>
          <SpanPolyglot>{match.params.fragment_id}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <InfoChapterWord data={{
        opus: fragmOpus,
        word: match.params.word,
        name: match.params.fragment_id,
        count: fragmCount,
      }} />
      <ChoiceBonus match={match} />
    </React.Fragment>
  );
};

export default ShowFragmentWord;
