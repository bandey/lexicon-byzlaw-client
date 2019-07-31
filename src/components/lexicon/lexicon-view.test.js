import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import Lexicon from './lexicon-view.js';

beforeAll(() => {
  Object.defineProperty(
    document.documentElement,
    'clientHeight',
    {value: 500, configurable: true, writable: true}
  );
});

beforeEach(() => {
  document.documentElement.clientHeight = 500;
});

it('uses sum heigth of data if client height too big', () => {
  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = shallow(<Lexicon data={data} />);

  // console.log(rendered.debug());

  const list = rendered.find('List');
  expect(list.exists()).toBeTruthy();
  expect(list.prop('height')).toEqual(120); // =3*40
});

it('uses part of client height if sum height of data too big', () => {
  document.documentElement.clientHeight = 130;

  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = shallow(<Lexicon data={data} />);

  // console.log(rendered.debug());

  const list = rendered.find('List');
  expect(list.exists()).toBeTruthy();
  expect(list.prop('height')).toEqual(91); // =0.7*130
});

it('renders correct content', () => {
  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = mount(<Lexicon data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
