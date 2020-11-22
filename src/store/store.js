import React, {useState} from 'react';

const StoreContext = React.createContext();

function StoreProvider({children}) {
  const [linguaId, setLinguaId] = useState('');
  const [opusName1, setOpusName1] = useState('');
  const [opusName2, setOpusName2] = useState('');
  const [operationId, setOperationId] = useState('');
  const [chapterName, setChapterName] = useState('');

  return (
    <StoreContext.Provider
      value={{
        linguaId,
        opusName1,
        opusName2,
        operationId,
        chapterName,
        setLinguaId,
        setOpusName1,
        setOpusName2,
        setOperationId,
        setChapterName,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const StoreConsumer = StoreContext.Consumer;

export {StoreContext, StoreProvider, StoreConsumer};
