import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId1 from './route-operations-id1.js';

function RouteOperations({match}) {
  const {t} = useTranslation();
  const {setOpusName1} = useContext(StoreContext);

  function ChoiceLexicon(props) {
    return (
      <ChoiceOpus 
        title={t('Choose lexicon 1')}
        onChoose={(item) => setOpusName1(item.name)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>{t('Operations')}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLexicon} />
      <Route path={`${match.path}/:opusId1`} component={RouteOperationsId1} />
    </React.Fragment>
  );
};

export default RouteOperations;
