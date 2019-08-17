import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'

function ShowProduct({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{match.params.id}</BriefPanel>
      </Link>
    </React.Fragment>
  );
};

export default ShowProduct;
