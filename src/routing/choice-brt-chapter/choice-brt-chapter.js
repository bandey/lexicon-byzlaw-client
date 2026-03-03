import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getBrtChaptersForWord} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ChoiceBrtChapter({match}) {
  const {setChapterName} = useContext(StoreContext);
  
  // Extract word from match.params.word
  const word = match.params.word;
  const queryBrtChapters = getBrtChaptersForWord(word);

  function WrapLink({item, children}) {
    const onClick = () => setChapterName(item.name);
    return (
      <Link key={item.id} to={`${match.url}/${item.id}`} onClick={onClick}>
        {children}
      </Link>
    );
  };

  function AdapterChoice(props) {
    return (<Lexicon mode='chapters1' WrapLink={WrapLink} {...props} />);
  };

  return (
    <DataProvider query={queryBrtChapters}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ChoiceBrtChapter;
