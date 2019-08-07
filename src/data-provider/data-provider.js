import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Alert from 'react-bootstrap/Alert';

function renderChildren(Children, dataName, {loading, error, data}) {
  if (loading) {
    return (<Alert variant="secondary">Loading...</Alert>);
  }
  if (error) {
    return (<Alert variant="danger">Error loading data!</Alert>);
  }
  return (
    <Children data={data[dataName]} />
  );
};

function DataProvider({children, query}) {
  return (
    <Query
      query={
        gql`
          query {
            ${query.gql}
          }
        `
      }
    >
      {renderChildren.bind(null, children, query.name)}
    </Query>
  );
};

export default DataProvider;
export {renderChildren};
