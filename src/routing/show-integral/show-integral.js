import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconIntegral} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowIntegral({match}) {
  const {t} = useTranslation();
  const {linguaId} = useContext(StoreContext);
  const queryLexiconIntegral = getLexiconIntegral(match.params.lingua);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{t(`$linguaNames.${linguaId}`)}</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconIntegral}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowIntegral;
