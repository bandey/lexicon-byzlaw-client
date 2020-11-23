import React from 'react';
import {useTranslation} from 'react-i18next';

import {Panel, PanelBody} from '../panel/panel.js';
import {SpanPolyglot} from '../../styles/polyglot.js';

function InfoChapterWord({data}) {
  if (!data) {
    return null;
  }

  const {t} = useTranslation();

  return (    
    <Panel border="primary">
      <PanelBody>
        <table>
          <tbody>
            <tr>
              <td>{t('Source')}:</td>
              <td>{data.opus}</td>
            </tr>
            <tr>
              <td>{t('Chapter')}:</td>
              <td><SpanPolyglot wordWrap>{data.name}</SpanPolyglot></td>
            </tr>
            <tr>
              <td>{t('Word')}:</td>
              <td><SpanPolyglot wordWrap>{data.word}</SpanPolyglot></td>
            </tr>
          </tbody>
        </table>
        {t('Quantity')}: {data.count}
      </PanelBody>
    </Panel>
  );
};

export default InfoChapterWord;
