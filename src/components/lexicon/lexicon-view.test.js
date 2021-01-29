import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import Lexicon from './lexicon-view.js';

beforeAll((done) => {
  Object.defineProperty(
    document.documentElement,
    'clientHeight',
    {value: 500, configurable: true, writable: true}
  );

  i18next
    .use(initReactI18next)
    .init({
      debug: false,
      lng: 'cimode',
      resources: {},
      interpolation: {escapeValue: false},
    })
    .then(() => done());
});

it('renders correct content for empty data', () => {
  const data = [];

  const rendered = mount(<Lexicon mode='lexicon2' data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 2 columns lexicon', () => {
  const data = [
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ];

  const rendered = mount(<Lexicon mode='lexicon2' data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 3 columns lexicon', () => {
  const data = [
    {w: 'one', c1: 1, c2: 0},
    {w: 'two', c1: 0, c2: 2},
    {w: 'three', c1: 2, c2: 1},
  ];

  const rendered = mount(<Lexicon mode='lexicon3' data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 1 column found chapters', () => {
  const data = [
    {opus: 'one', name: 'one.1'},
    {opus: 'two', name: 'two.2'},
    {opus: 'three', name: 'three.3'},
  ];

  const rendered = mount(<Lexicon mode='chapters1' data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('renders correct content for 2 columns found chapters', () => {
  const data = [
    {name: 'one.1', count: 1},
    {name: 'two.2', count: 0},
    {name: 'three.3', count: 2},
  ];

  const rendered = mount(<Lexicon mode='chapters2' data={data} />);

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
