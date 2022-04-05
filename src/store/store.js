import React, {useState} from 'react';

const StoreContext = React.createContext();

function StoreProvider({children}) {
  const [linguaId, setLinguaId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [opusName1, setOpusName1] = useState('');
  const [opusName2, setOpusName2] = useState('');
  const [operationId, setOperationId] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [fragmOpus, setFragmOpus] = useState('');
  const [fragmCount, setFragmCount] = useState('');

  return (
    <StoreContext.Provider
      value={{
        linguaId,
        userEmail,
        opusName1,
        opusName2,
        operationId,
        chapterName,
        fragmOpus,
        fragmCount,
        setLinguaId,
        setUserEmail,
        setOpusName1,
        setOpusName2,
        setOperationId,
        setChapterName,
        setFragmOpus,
        setFragmCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const StoreConsumer = StoreContext.Consumer;

export {StoreContext, StoreProvider, StoreConsumer};
