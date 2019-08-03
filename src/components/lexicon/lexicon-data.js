import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Alert from 'react-bootstrap/Alert';

import Lexicon from './lexicon-view.js';

function renderContent(props, {loading, error, data}) {
  if (loading) {
    return (<Alert variant="secondary">Loading...</Alert>);
  }
  if (error) {
    return (<Alert variant="danger">Error loading data!</Alert>);
  }
  return (
    <Lexicon data={data.lexiconIntegral} {...props} />
  );
};

function LexiconData(props) {
  const renderChildren = renderContent.bind(null, props);

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

export default LexiconData;
export {renderContent};
