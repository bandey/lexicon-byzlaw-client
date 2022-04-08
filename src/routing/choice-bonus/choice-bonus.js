import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceBonus({match}) {
  const {t} = useTranslation();

  function wrapLink({id}, Child) {
    return (
      <Link key={id} to={`${match.url}/${id}`}>
        {Child}
      </Link>
    );
  };

  return (
    <React.Fragment>
      <Choice title={t('Choose view mode')} wrapLink={wrapLink}>
        {[
          {id: 'content', name: t('Chapter content')},
        ]}
      </Choice>
    </React.Fragment>
  );
};

export default ChoiceBonus;
