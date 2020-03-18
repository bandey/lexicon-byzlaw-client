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
        {id: 'lat', name: t(`$linguaNames.lat`)},
        {id: 'gre', name: t(`$linguaNames.gre`)},
        {id: 'cyr', name: t(`$linguaNames.cyr`)},
        {id: 'gla', name: t(`$linguaNames.gla`)},
        {id: 'mix', name: t(`$linguaNames.mix`)},
      ]}
    </Choice>
  );
};

export default ChoiceLingua;
