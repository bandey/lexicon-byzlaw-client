import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';

function ShowFoundChapters({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>
          <SpanPolyglot>{match.params.word}</SpanPolyglot>
        </BriefPanel>
      </Link>
      <BriefPanel>...</BriefPanel>
    </React.Fragment>
  );
};

export default ShowFoundChapters;
