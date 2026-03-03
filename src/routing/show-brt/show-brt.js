import React from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';
import {useTranslation} from 'react-i18next';

import DataProvider from '../../data-provider/data-provider.js';
import {getBrtWords} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowBrt({match}) {
  const {t} = useTranslation();
  const queryBrtWords = getBrtWords();

  function WrapLink({item, children}) {
    return (
      <Link key={item.w} to={`${match.url}/` + strictUriEncode(item.w)}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    // Transform string array to object array format {w: string}
    const transformedData = props.data ? props.data.map(word => ({w: word})) : [];
    return (
      <Lexicon 
        mode='lexicon1' 
        WrapLink={WrapLink} 
        title={t('Receptions and transliterations')}
        {...props} 
        data={transformedData}
      />
    );
  };

  return (
    <DataProvider query={queryBrtWords}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowBrt;
