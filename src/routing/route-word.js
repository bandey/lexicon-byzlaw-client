import React from 'react';
import {Route, Link} from 'react-router-dom';

import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ChoiceFoundChapter from './choice-found-chapter/choice-found-chapter.js';
import ChoiceBrtChapter from './choice-brt-chapter/choice-brt-chapter.js';
import RouteChapter from './route-chapter.js';

function RouteWord({match}) {
  // Detect BRT context from URL path
  const isBrtContext = match.path.startsWith('/route/brt/');
  // Choose appropriate chapter selection component based on context
  const ChapterChoiceComponent = isBrtContext ? ChoiceBrtChapter : ChoiceFoundChapter;
  
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.word}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChapterChoiceComponent} />
      <Route path={`${match.path}/:chapterId`} component={RouteChapter} />
    </React.Fragment>
  );
};

export default RouteWord;
