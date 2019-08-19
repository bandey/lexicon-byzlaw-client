import React, {useState} from 'react';

const StoreContext = React.createContext();

function StoreProvider({children}) {
  const [opusName1, setOpusName1] = useState('');
  const [opusName2, setOpusName2] = useState('');

  return (
    <StoreContext.Provider
      value={{
        opusName1,
        opusName2,
        setOpusName1,
        setOpusName2,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const StoreConsumer = StoreContext.Consumer;

export {StoreContext, StoreProvider, StoreConsumer};
