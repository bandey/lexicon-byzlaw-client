import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import {SpanPolyglot} from '../styles/polyglot.js';
import ChoiceFoundFragment from './choice-found-fragment/choice-found-fragment.js';
import ShowFoundFragment from './show-found-fragment/show-found-fragment.js';
import ShowChapterContent from './show-chapter-content/show-chapter-content.js';

function RouteChapter({match}) {
  const {chapterName} = useContext(StoreContext);
  
  function ShowFragmentContent({match}) {
    return (
      <React.Fragment>
        <Link to={delLastElemFromURL(match.url, 3)}>
          <BriefPanel>
            <SpanPolyglot>{match.params.fragmentId}</SpanPolyglot>
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
      <Route exact path={match.path} component={ChoiceFoundFragment} />
      <Route exact path={`${match.path}/content`} component={ShowChapterContent} />
      <Route exact path={`${match.path}/fragments/:fragmentId`} component={ShowFoundFragment} />
      <Route exact path={`${match.path}/fragments/:fragmentId/content`} component={ShowFragmentContent} />
    </React.Fragment>
  );
};

export default RouteChapter;
