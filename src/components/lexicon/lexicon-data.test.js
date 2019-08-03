import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import {renderContent} from './lexicon-data.js';

it('renders correct content for loading', () => {
  const data = {};
  const props = {foo: 'bar'};

  const rendered = shallow(
    <div>{renderContent(props, {loading: true, error: undefined, data})}</div>
  );

  // console.log(rendered.debug());

  const alert = rendered.find('Alert');
  expect(alert.exists()).toBeTruthy();
  expect(alert.prop('variant')).toEqual('secondary');
  expect(alert.contains('Loading...')).toBeTruthy();
});

it('renders correct content for error', () => {
  const data = {};
  const props = {foo: 'bar'};
  const err = new Error('Some error');

  const rendered = shallow(
    <div>{renderContent(props, {loading: false, error: err, data})}</div>
  );

  // console.log(rendered.debug());

  const alert = rendered.find('Alert');
  expect(alert.exists()).toBeTruthy();
  expect(alert.prop('variant')).toEqual('danger');
  expect(alert.contains('Error loading data!')).toBeTruthy();
});

it('renders correct content for data', () => {
  const data = {
    lexiconIntegral: [
      {w: 'one', c: 1},
      {w: 'two', c: 2},
      {w: 'three', c: 3},
    ]
  };
  const props = {foo: 'bar'};

  const rendered = shallow(
    <div>{renderContent(props, {loading: false, error: undefined, data})}</div>
  );

  // console.log(rendered.debug());

  const lexicon = rendered.find('Lexicon');
  expect(lexicon.exists()).toBeTruthy();
  expect(lexicon.prop('data')).toEqual([
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ]);
  expect(lexicon.prop('foo')).toEqual('bar');
});
