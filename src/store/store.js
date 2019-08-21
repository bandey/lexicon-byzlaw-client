import React, {useState} from 'react';

const StoreContext = React.createContext();

function StoreProvider({children}) {
  const [opusName1, setOpusName1] = useState('');
  const [opusName2, setOpusName2] = useState('');
  const [operationName, setOperationName] = useState('');

  return (
    <StoreContext.Provider
      value={{
        opusName1,
        opusName2,
        operationName,
        setOpusName1,
        setOpusName2,
        setOperationName,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const StoreConsumer = StoreContext.Consumer;

export {StoreContext, StoreProvider, StoreConsumer};
