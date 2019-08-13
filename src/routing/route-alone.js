import React from 'react';
import {Route, Link} from 'react-router-dom';

import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import ShowLexicon from './show-lexicon/show-lexicon.js';

function RouteAlone({match}) {
  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>Ad fontes</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceOpus} />
      <Route path={`${match.path}/:id`} component={ShowLexicon} />
    </React.Fragment>
  );
};

export default RouteAlone;