import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceLingua({title, match, onChoose}) {
  const {t} = useTranslation();

  function wrapLink(item, Child) {
    const onClick = onChoose ? () => onChoose(item) : null;
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {Child}
      </Link>
    );
  };

  return (
    <Choice title={title} wrapLink={wrapLink}>
      {[
        {id: 'lat', name: t('Latin')},
        {id: 'gre', name: t('Greek')},
        {id: 'cyr', name: t('Slavonic')},
        {id: 'gla', name: t('Glagolitic')},
        {id: 'mix', name: t('Mixed')},
      ]}
    </Choice>
  );
};

export default ChoiceLingua;
