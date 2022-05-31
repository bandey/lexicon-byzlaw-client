import React from 'react';
import {useTranslation} from 'react-i18next';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Alert from 'react-bootstrap/Alert';

function renderChildren(Children, dataName, t, {loading, error, data}) {
  if (loading) {
    return (<Alert variant="secondary">{t('$Loading')}</Alert>);
  }
  if (error) {
    if (error.message === 'GraphQL error: Not logged in') {
      return (<Alert variant="danger">{t('$Not logged in')}</Alert>);
    }
    if (error.message === 'GraphQL error: Access denied') {
      return (<Alert variant="danger">{t('$Access denied')}</Alert>);
    }
    return (<Alert variant="danger">{t('$Error loading')}</Alert>);
  }
  return (
    <Children data={data[dataName]} />
  );
};

function DataProvider({children, query}) {
  const {t} = useTranslation();

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
      {renderChildren.bind(null, children, query.name, t)}
    </Query>
  );
};

export default DataProvider;
export {renderChildren};
