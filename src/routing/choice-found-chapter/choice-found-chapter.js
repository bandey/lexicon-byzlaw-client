import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getChaptersWithWord} from '../../data-provider/data-provider-queries.js';
import Lexicon from '../../components/lexicon/lexicon.js';

function ChoiceFoundChapters({match}) {
  const {setChapterName} = useContext(StoreContext);

  const opusIds = []; // empty array => search word through all opuses
  if (match.params.opusId) opusIds.push(match.params.opusId); // alone
  if (match.params.opusId1) opusIds.push(match.params.opusId1); // operations
  if (match.params.opusId2) opusIds.push(match.params.opusId2); // operations
  const queryChaptersWithWord = getChaptersWithWord(match.params.word, opusIds);

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
    <DataProvider query={queryChaptersWithWord}>
      {AdapterChoice}
    </DataProvider>
  );
};

export default ChoiceFoundChapters;
