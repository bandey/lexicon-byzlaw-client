import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {StoreContext} from '../../store/store.js';
import DataProvider from '../../data-provider/data-provider.js';
import {getChapterContent} from '../../data-provider/data-provider-queries.js';
import markWordInText from '../utils/mark-word-in-text.js';
import delLastElemFromURL from '../utils/del-last-elem-from-url.js';
import {Panel, PanelBody, BriefPanel} from '../../components/panel/panel.js'

function ShowChapterContent({match}) {
  const {t} = useTranslation();
  const {userEmail} = useContext(StoreContext);
  const queryChapterContent = 
    getChapterContent(match.params.chapterId, userEmail);

  function ChapterContentPanel({data}) {
    const blocks = markWordInText(match.params.word, data);
    return (
      <Panel border="primary">
        <PanelBody>
          {blocks}
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
