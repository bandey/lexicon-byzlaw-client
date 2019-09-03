import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import LexiconList from './lexicon-list.js';

beforeAll(() => {
  Object.defineProperty(
    document.documentElement,
    'clientHeight',
    {value: 500, configurable: true, writable: true}
  );
});

it('uses sum heigth of data if list is short', () => {
  const rendered = shallow(<LexiconList itemCount={5} />);

  // console.log(rendered.debug());

  const list = rendered.find('Styled(List)');
  expect(list.exists()).toBeTruthy();
  expect(list.prop('itemCount')).toEqual(5);
  expect(list.prop('height')).toEqual(200); // =5*40
});

it('uses part of client height if list is long', () => {
  const rendered = shallow(<LexiconList itemCount={10} />);

  // console.log(rendered.debug());

  const list = rendered.find('Styled(List)');
  expect(list.exists()).toBeTruthy();
  expect(list.prop('itemCount')).toEqual(10);
  expect(list.prop('height')).toEqual(350); // =0.7*500
});

it('renders children', () => {
  const rendered = shallow(<LexiconList itemCount={1}>ChildrenItem</LexiconList>);

  // console.log(rendered.debug());

  const list = rendered.find('Styled(List)');
  expect(list.exists()).toBeTruthy();
  expect(list.contains('ChildrenItem')).toBeTruthy();
});
