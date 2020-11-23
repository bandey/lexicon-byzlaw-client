import React from 'react';

import {Panel, PanelBody} from '../panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';

function InfoChapterWord({data}) {
  if (!data) {
    return null;
  }

  return (    
    <Panel border="primary">
      <PanelBody>
        <table>
          <tbody>
            <tr><td>Словник:</td><td>{data.opus}</td></tr>
            <tr><td>Статья:</td><td><SpanPolyglot wordWrap>{data.name}</SpanPolyglot></td></tr>
            <tr><td>Слово:</td><td><SpanPolyglot wordWrap>{data.word}</SpanPolyglot></td></tr>
          </tbody>
        </table>
        Количество: {data.count}
      </PanelBody>
    </Panel>
  );
};

export default InfoChapterWord;
