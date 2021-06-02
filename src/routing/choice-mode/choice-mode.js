import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';
import AdditionsBoard from '../../components/additions-board/additions-board.js';

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
    <React.Fragment>
      <Choice title={t('Choose action')} wrapLink={wrapLink}>
        {[
          {id: 'integral', name: t('Integral lexicon')},
          {id: 'alone', name: t('Ad fontes')},
          {id: 'operations', name: t('Operations')},
        ]}
      </Choice>
      <AdditionsBoard />
    </React.Fragment>
  );
};

export default ChoiceMode;
