import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Lexicon from './lexicon-view.js';

export default function LexiconData(props) {
  return (
    <Query
      query={
        gql`
          query {
            lexiconIntegral { w c }
          }
        `
      }
    >
      {({loading, error, data}) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error!</p>;
        }
        return (
          <Lexicon data={data.lexiconIntegral} {...props} />
        );
      }}
    </Query>
  );
};
