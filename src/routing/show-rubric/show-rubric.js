import React from 'react';
import {Link} from 'react-router-dom';

import DataProvider from '../../data-provider/data-provider.js';
import {getRubricName} from '../../data-provider/data-provider-queries.js';
import {BriefPanel} from '../../components/panel/panel.js'

function ShowRubric({rubricId, linkTo}) {
  if (!rubricId) return null;

  const queryRubricName = getRubricName(rubricId);

  function RubricNamePanel({data}) {
    return (
      <Link to={linkTo}>
        <BriefPanel>{data}</BriefPanel>
      </Link>
    );
  };

  return (
    <DataProvider query={queryRubricName}>
      {RubricNamePanel}
    </DataProvider>
  );
};

export default ShowRubric;
