import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getChapterContent} from '../../data-provider/data-provider-queries.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {Panel, PanelBody, BriefPanel} from '../../components/panel/panel.js'
import {SpanPolyglot} from '../../styles/polyglot.js';

function ShowChapterContent({match}) {
  const {t} = useTranslation();
  const {userEmail} = useContext(StoreContext);
  const queryChapterContent = 
    getChapterContent(match.params.chapter_id, userEmail);

  function ChapterContentPanel({data}) {
    return (
      <Panel border="primary">
        <PanelBody>
          <SpanPolyglot whiteSpace>{data}</SpanPolyglot>
        </PanelBody>
      </Panel>
    );
  };

  return (
    <React.Fragment>
      <Link to={delLastElemFromURL(match.url)}>
        <BriefPanel>{t('Chapter content')}</BriefPanel>
      </Link>
      <DataProvider query={queryChapterContent}>
        {ChapterContentPanel}
      </DataProvider>
    </React.Fragment>
  );
};

export default ShowChapterContent;
