import React from 'react';
import {Route} from 'react-router-dom';

import ChoiceOpus from './choice-opus/choice-opus.js';
import ShowLexicon from './show-lexicon/show-lexicon.js';

function RouteRoot() {
  return (
    <React.Fragment>
      <Route path="/" exact component={ChoiceOpus} />
      <Route path="/:id" component={ShowLexicon} />
    </React.Fragment>
  );
};

export default RouteRoot;
