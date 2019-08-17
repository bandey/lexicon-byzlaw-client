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

function getLexiconOperation(operation, id1, id2) {
  switch (operation) {
    case 'conjunction': return getLexiconConjunction(id1, id2);
    case 'disjunction': return getLexiconDisjunction(id1, id2);
    default: return {name: '', gql: ''};
  }
};

export {
  getOpusAll, 
  getLexiconIntegral, 
  getLexiconAlone, 
  getLexiconConjunction,
  getLexiconDisjunction,
  getLexiconOperation,
};
