import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import strictUriEncode from 'strict-uri-encode';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getChaptersWithWord} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ShowFoundChapters({match}) {
  const {setChapterName} = useContext(StoreContext);
  const queryChaptersWithWord = 
    getChaptersWithWord(match.params.word, match.params.id);

  function WrapLink({item, children}) {
    const onClick = () => setChapterName(item.name);
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    return (<Lexicon WrapLink={WrapLink} {...props} />);
  };

  return (
    <DataProvider query={queryChaptersWithWord}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ShowFoundChapters;
