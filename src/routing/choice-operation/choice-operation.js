import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Choice from '../../components/choice/choice.js';

function ChoiceOperation({match, onChoose}) {
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
    <Choice title={t('Choose operation')} wrapLink={wrapLink}>
      {[
        {id: 'intersection', name: t('Intersection 1 2')},
        {id: 'union', name: t('Union 1 2')},
        {id: 'difference12', name: t('Set difference 1 2')},
        {id: 'difference21', name: t('Set difference 2 1')},
      ]}
    </Choice>
  );
};

export default ChoiceOperation;
