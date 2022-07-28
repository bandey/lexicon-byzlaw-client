import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {extractLang} from '../../i18n/i18n.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getRubricName} from '../../data-provider/data-provider-queries.js';
import {BriefPanel} from '../../components/panel/panel.js'

function ShowRubric({rubricId, linkTo}) {
  if (!rubricId) return null;

  const {i18n} = useTranslation();
  const queryRubricName = getRubricName(rubricId, extractLang(i18n.language));

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
