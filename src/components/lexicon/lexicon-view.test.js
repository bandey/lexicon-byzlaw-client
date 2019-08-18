import React from 'react';
import Enzyme, {mount} from 'enzyme';
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

it('renders correct content for empty data', () => {
  const data = [];

  const rendered = mount(<Lexicon data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 2 columns data', () => {
  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = mount(<Lexicon data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 3 columns data', () => {
  const data = [
    {w: 'one', c1: 1, c2: 0},
    {w: 'two', c1: 0, c2: 2},
    {w: 'three', c1: 2, c2: 1},
  ];

  const rendered = mount(<Lexicon data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
