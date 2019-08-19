import React, {useContext} from 'react';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import ShowLexicon from './show-lexicon/show-lexicon.js';

function RouteAlone({match}) {
  const {setOpusName1} = useContext(StoreContext);

  function ChoiceLexicon(props) {
    return (
      <ChoiceOpus
        title="Choose lexicon"
        onChoose={(item) => setOpusName1(item.name)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>Ad fontes</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLexicon} />
      <Route path={`${match.path}/:id`} component={ShowLexicon} />
    </React.Fragment>
  );
};

export default RouteAlone;
