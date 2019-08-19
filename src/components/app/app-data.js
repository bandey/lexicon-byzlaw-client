import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import {StoreProvider} from '../../store/store.js';
import App from './app-view.js';

const clientApollo = new ApolloClient();

export default function AppData(props) {
  return (
    <StoreProvider>
      <ApolloProvider client={clientApollo}>
        <App {...props} />
      </ApolloProvider>
    </StoreProvider>
  );
};
