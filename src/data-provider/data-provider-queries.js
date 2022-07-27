function getOpusAll() {
  return {
    name: 'opusAll',
    gql: 'opusAll { id name }',
  };
};

function getChildRubrics(id) {
  return {
    name: 'getChildRubrics',
    gql: `getChildRubrics(id: ${id}) { id name opusId }`,
  };
};

function getLexiconIntegral(lingua) {
  const params = lingua ? `(lingua: "${lingua}")` : '';
  return {
    name: 'lexiconIntegral',
    gql: `lexiconIntegral${params} { w c }`,
  };
};

function getLexiconAlone(id) {
  return {
    name: 'lexiconAlone',
    gql: `lexiconAlone(id: "${id}") { w c }`,
  };
};

function getLexiconConjunction(id1, id2) {
  return {
    name: 'lexiconConjunction',
    gql: `lexiconConjunction(id1: "${id1}", id2: "${id2}") { w c1 c2 }`,
  };
};

function getLexiconDisjunction(id1, id2) {
  return {
    name: 'lexiconDisjunction',
    gql: `lexiconDisjunction(id1: "${id1}", id2: "${id2}") { w c1 c2 }`,
  };
};

function getLexiconAbjunction(id1, id2) {
  return {
    name: 'lexiconAbjunction',
    gql: `lexiconAbjunction(id1: "${id1}", id2: "${id2}") { w c }`,
  };
};

function getLexiconOperation(operation, id1, id2) {
  switch (operation) {
    case 'intersection': return getLexiconConjunction(id1, id2);
    case 'union': return getLexiconDisjunction(id1, id2);
    case 'difference12': return getLexiconAbjunction(id1, id2);
    case 'difference21': return getLexiconAbjunction(id2, id1);
    default: return {name: '', gql: ''};
  }
};

function getChaptersWithWord(word, opusIds) {
  const params = opusIds ? `, opusIds: ${JSON.stringify(opusIds)}` : '';
  return {
    name: 'getChaptersWithWord',
    gql: `getChaptersWithWord(word: "${word}"${params}) {id opus name}`,
  }; 
};

function getInfoChapterWithWord(chapterId, word) {
  return {
    name: 'infoChapterWithWord',
    gql: `infoChapterWithWord(chapterId: ${chapterId}, word: "${word}") ` + 
      '{opus word fragments {name count}}',
  }; 
};

function getChapterContent(chapterId, userEmail) {
  const user = userEmail || "";
  // param user is needed to requery after login/logout and to overcome apollo cache
  return {
    name: 'getChapterContent',
    gql: `getChapterContent(id: ${chapterId}, user: "${user}")`,
  }; 
};

export {
  getOpusAll,
  getChildRubrics, 
  getLexiconIntegral, 
  getLexiconAlone, 
  getLexiconConjunction,
  getLexiconDisjunction,
  getLexiconAbjunction,
  getLexiconOperation,
  getChaptersWithWord,
  getInfoChapterWithWord,
  getChapterContent,
};
