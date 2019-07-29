import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import Lexicon from './lexicon-view.js';

it('render content', () => {
  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = shallow(<Lexicon data={data} />);

  // console.log(rendered.debug());
  /*
  <List width="100%" height={400} itemSize={40} itemCount={3}>
    [function renderRow]
  </List>
  */

  const list = rendered.find('List');
  expect(list.exists()).toBeTruthy();
  expect(list.prop('width')).toEqual('100%');
  expect(list.prop('height')).toEqual(400);
  expect(list.prop('itemSize')).toEqual(40);
  expect(list.prop('itemCount')).toEqual(3);
});
