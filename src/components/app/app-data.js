import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './app-view.js';

const clientApollo = new ApolloClient();

export default function AppData(props) {
  return (
    <ApolloProvider client={clientApollo}>
      <App {...props} />
    </ApolloProvider>
  );
};
