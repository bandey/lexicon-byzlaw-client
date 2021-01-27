import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ShowChapterWord from './show-chapter-word/show-chapter-word.js';
import ShowFragmentWord from './show-fragment-word/show-fragment-word.js';

function RouteFragments({match}) {
  const {chapterName} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{chapterName}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowChapterWord} />
      <Route path={`${match.path}/:fragment_id`} component={ShowFragmentWord} />
    </React.Fragment>
  );
};

export default RouteFragments;
