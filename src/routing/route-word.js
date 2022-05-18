import React from 'react';
import {Route, Link} from 'react-router-dom';

import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ChoiceFoundChapter from './choice-found-chapter/choice-found-chapter.js';
import RouteChapter from './route-chapter.js';

function RouteWord({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.word}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceFoundChapter} />
      <Route path={`${match.path}/:chapter_id`} component={RouteChapter} />
    </React.Fragment>
  );
};

export default RouteWord;
