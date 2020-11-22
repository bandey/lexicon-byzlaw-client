import React from 'react';
import {Route, Link} from 'react-router-dom';

import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ShowFoundChapters from './show-found-chapters/show-found-chapters.js';
import ShowChapterWord from './show-chapter-word/show-chapter-word.js';

function RouteChapters({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.word}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowFoundChapters} />
      <Route path={`${match.path}/:chapter_id`} component={ShowChapterWord} />
    </React.Fragment>
  );
};

export default RouteChapters;
