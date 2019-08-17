import React from 'react';
import {Link} from 'react-router-dom';

import {BriefPanel} from '../../components/panel/panel.js'

function ShowProduct({match}) {
  return (
    <React.Fragment>
      <Link to={match.url}>
        <BriefPanel>{match.params.id}</BriefPanel>
      </Link>
    </React.Fragment>
  );
};

export default ShowProduct;
