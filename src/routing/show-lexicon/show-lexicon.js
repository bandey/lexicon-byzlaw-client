import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'
import DataProvider from '../../data-provider/data-provider.js';
import {getLexiconAlone} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowLexicon({match}) {
  const {opusName1} = useContext(StoreContext);
  const queryLexiconAlone = getLexiconAlone(match.params.id);

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{opusName1}</BriefPanel>
      </Link>
      <DataProvider query={queryLexiconAlone}>
        {Lexicon}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowLexicon;
