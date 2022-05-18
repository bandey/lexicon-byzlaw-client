import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js';
import ShowLexicon from './show-lexicon/show-lexicon.js';
import RouteWord from './route-word.js';

function RouteAloneOpus({match}) {
  const {opusName1} = useContext(StoreContext);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{opusName1}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ShowLexicon} />
      <Route path={`${match.path}/:word`} component={RouteWord} />
    </React.Fragment>
  );
};

export default RouteAloneOpus;
