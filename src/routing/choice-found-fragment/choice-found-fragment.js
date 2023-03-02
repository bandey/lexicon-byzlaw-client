import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getInfoChapterWithWord} from '../../data-provider/data-provider-queries.js';
import InfoChapterWord from 
  '../../components/info-chapter-word/info-chapter-word.js';
import Lexicon from '../../components/lexicon/lexicon.js';
import ChoiceBonus from '../choice-bonus/choice-bonus.js';

function ChoiceFoundFragment({match}) {
  const {setFragmOpus, setFragmCount} = useContext(StoreContext);
  const queryInfoChapterWithWord = 
    getInfoChapterWithWord(match.params.chapterId, match.params.word);

  function InspectFragments({data}) {
    if (!data || !data.fragments || !data.fragments.length) {
      return null;
    }

    function WrapLink({item, children}) {
      const onClick = () => { setFragmOpus(data.opus); setFragmCount(item.count); };
      return (
        <Link key={item.name} to={`${match.url}/fragments/${item.name}`} onClick={onClick}>
          {children}
        </Link>
      );
    };

    if (data.fragments.length == 1) {
      return (
        <React.Fragment>
          <InfoChapterWord data={{
            opus: data.opus,
            word: data.word,
            name: data.fragments[0].name,
            count: data.fragments[0].count,
          }} />
          <ChoiceBonus match={match} />
        </React.Fragment>
      );
    } else {
     return (<Lexicon mode='chapters2' data={data.fragments} WrapLink={WrapLink} />);
    }
  };

  return (
    <DataProvider query={queryInfoChapterWithWord}>
      {InspectFragments}
    </DataProvider>
  );
};

export default ChoiceFoundFragment;
