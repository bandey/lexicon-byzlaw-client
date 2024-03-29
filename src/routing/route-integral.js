import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Link} from 'react-router-dom';

import {StoreContext} from '../store/store.js';
import {BriefPanel} from '../components/panel/panel.js'
import ChoiceLingua from './choice-lingua/choice-lingua.js';
import RouteIntegralLingua from './route-integral-lingua.js';

function RouteIntegral({match}) {
  const {t} = useTranslation();
  const {setLinguaId} = useContext(StoreContext);

  function ChoiceLinguaWrapper(props) {
    return (
      <ChoiceLingua
        title={t('Choose language')}
        onChoose={(item) => setLinguaId(item.id)}
        {...props}
      />
    );
  };

  return (
    <React.Fragment>
      <Link to="/">
        <BriefPanel>{t('Integral lexicon')}</BriefPanel>
      </Link>
      <Route exact path={match.path} component={ChoiceLinguaWrapper} />
      <Route path={`${match.path}/:lingua`} component={RouteIntegralLingua} />
    </React.Fragment>
  );
};

export default RouteIntegral;
