import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {extractLang} from '../../i18n/i18n.js';
import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getChildRubrics} from '../../data-provider/data-provider-queries.js';
import Choice from '../../components/choice/choice.js';

function ChoiceRubric({match}) {
  const {t, i18n} = useTranslation();
  const {setOpusName1} = useContext(StoreContext);
  const queryChildRubrics = 
    getChildRubrics(match.params.rubric_id || 0, extractLang(i18n.language));

  function wrapLink(item, Child) {
    const opusId = item.opusId;
    const to = opusId ? `opus/${opusId}` : `${item.id}`;
    const onClick = opusId ? () => setOpusName1(item.name) : null;
    return (
      <Link key={item.id} to={`${match.url}/${to}`} onClick={onClick}>
        {Child}
      </Link>
    );
  };

  function AdapterChoice({data}) {
    return (
      <Choice title={t('Choose lexicon')} wrapLink={wrapLink}>
        {data}
      </Choice>
    );
  };

  return (
    <DataProvider query={queryChildRubrics}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ChoiceRubric;
