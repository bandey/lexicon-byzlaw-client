import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

import {StoreContext} from '../../store/store.js';
import Choice from '../../components/choice/choice.js';

function ChoiceBonus({match}) {
  const {t} = useTranslation();
  const {chapterName} = useContext(StoreContext);
  const urlAnnotation = t('$ExpertSystem url') + '/link/' + strictUriEncode(chapterName);

  function wrapLink({id, link, url}, Child) {
    if (link) {
      return (<Link key={id} to={link}>{Child}</Link>);
    } else {
      return (<a key={id} href={url} target="_blank" rel="noopener noreferrer">{Child}</a>);
    }
  };

  return (
    <React.Fragment>
      <Choice title={t('Choose view mode')} wrapLink={wrapLink}>
        {[
          {id: 'content', name: t('Chapter content'), link: `${match.url}/content`},
          {id: 'annotation', name: t('Annotations'), url: urlAnnotation + '?' + t('$LangParam')},
        ]}
      </Choice>
    </React.Fragment>
  );
};

export default ChoiceBonus;
