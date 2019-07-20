import React from 'react';

function Lexicon({data}) {
  return (
    <ul>
      {
        data.map(({w, c}) => (
          <li key={w}>{w} - {c}</li>
        ))
      }
    </ul>
  );
};

export default Lexicon;
