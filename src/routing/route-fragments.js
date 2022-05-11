import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ShowChapterWord from './show-chapter-word/show-chapter-word.js';
import ShowFragmentWord from './show-fragment-word/show-fragment-word.js';
import ShowChapterContent from './show-chapter-content/show-chapter-content.js';

function RouteFragments({match}) {
  const {chapterName} = useContext(StoreContext);
  
  function ShowFragmentContent({match}) {
    return (
      <React.Fragment>
        <Link to={delLastElemFromURL(match.url, 3)}>
          <BriefPanel>
            <SpanPolyglot>{match.params.fragment_id}</SpanPolyglot>
          </BriefPanel>
        </Link>
        <ShowChapterContent match={match} />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{chapterName}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowChapterWord} />
      <Route exact path={`${match.path}/content`} component={ShowChapterContent} />
      <Route exact path={`${match.path}/fragments/:fragment_id`} component={ShowFragmentWord} />
      <Route exact path={`${match.path}/fragments/:fragment_id/content`} component={ShowFragmentContent} />
    </React.Fragment>
  );
};

export default RouteFragments;
