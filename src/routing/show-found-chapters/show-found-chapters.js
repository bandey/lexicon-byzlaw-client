import React from 'react';
import {Link} from 'react-router-dom';

import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {BriefPanel} from '../../components/panel/panel.js'

import styled from 'styled-components';
const Polyglot = styled.span`
  font-family: PolyglotUnited, "Times New Roman", Times, serif;
  font-size: larger;
`;

function ShowFoundChapters({match}) {
  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel><Polyglot>{match.params.word}</Polyglot></BriefPanel>
      </Link>
      <BriefPanel>...</BriefPanel>
    </React.Fragment>
  );
};

export default ShowFoundChapters;
