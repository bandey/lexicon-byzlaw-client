import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceMode() {
  const {t} = useTranslation();

  function wrapLink({id}, Child) {
    return (
      <Link key={id} to={`/route/${id}`}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title={t('Choose action')} wrapLink={wrapLink}>
      {[
        {id: 'integral', name: t('Integral lexicon')},
        {id: 'alone', name: t('Ad fontes')},
        {id: 'operations', name: t('Operations')},
      ]}
    </Choice>
  );
};

export default ChoiceMode;
