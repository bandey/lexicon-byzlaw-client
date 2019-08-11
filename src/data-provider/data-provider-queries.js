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

export {getLexiconIntegral, getLexiconAlone};
