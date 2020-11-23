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
        Словник: {data.opus}<br />
        Статья: <SpanPolyglot>{data.name}</SpanPolyglot><br />
        Слово: <SpanPolyglot>{data.word}</SpanPolyglot><br />
        Количество: {data.count}
      </PanelBody>
    </Panel>
  );
};

export default InfoChapterWord;
