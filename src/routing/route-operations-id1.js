import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import delLastElemFromURL from './utils/del-last-elem-from-url.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceOpus from './choice-opus/choice-opus.js';
import RouteOperationsId2 from './route-operations-id2.js';

function RouteOperationsId1({match}) {
  const {t} = useTranslation();
  const {opusName1, setOpusName2} = useContext(StoreContext);

  function ChoiceLexicon(props) {
    return (
      <ChoiceOpus
        title={t('Choose lexicon 2')}
        onChoose={(item) => setOpusName2(item.name)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{`1: ${opusName1}`}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLexicon} />
      <Route path={`${match.path}/:id2`} component={RouteOperationsId2} />
    </React.Fragment>
  );
};

export default RouteOperationsId1;
