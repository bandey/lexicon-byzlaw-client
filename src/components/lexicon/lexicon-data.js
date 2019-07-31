import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import Lexicon from './lexicon-view.js';

export function renderContent({loading, error, data}, props) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  }
  return (
    <Lexicon data={data.lexiconIntegral} {...props} />
  );
};

export default function LexiconData(props) {
  const renderChildren = (paramsObj) => {
    return renderContent(paramsObj, props);
  };

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
      {renderChildren}
    </Query>
  );
};
