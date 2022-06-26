import React, {useState, useEffect} from 'react';
import {debounce} from 'debounce';

import {rowHeight} from '../row/lexicon-row-factory.js';
import {List} from './lexicon-list-styles.js';

function LexiconList({itemCount, children}) {
  const dataHeight = itemCount * rowHeight;

  function calcListHeight() {
    let height = Math.floor(document.documentElement.clientHeight * 0.7);
    if (height > dataHeight) {
      height = dataHeight;
    }
    return height;
  };

  const [listHeight, setListHeight] = useState(calcListHeight());

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      return setListHeight(calcListHeight());
    }, 200);

    window.addEventListener('resize', handleWindowResize);

    return function cleanup() {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [itemCount]);

  return (
    <List
      width="100%"
      height={listHeight}
      itemSize={rowHeight}
      itemCount={itemCount}
    >
      {children}
    </List>
  );
};

export default LexiconList;
