function getOpusAll() {
  return {
    name: 'opusAll',
    gql: 'opusAll { id name }',
  };
};

function getLexiconIntegral() {
  return {
    name: 'lexiconIntegral',
    gql: 'lexiconIntegral { w c }',
  };
};

function getLexiconAlone(id) {
  return {
    name: 'lexiconAlone',
    gql: `lexiconAlone(id: "${id}") { w c }`,
  };
};

export {getOpusAll, getLexiconIntegral, getLexiconAlone};
