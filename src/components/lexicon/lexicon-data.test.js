import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import {renderContent} from './lexicon-data.js';

it('renders correct content for loading', () => {
  const data = {};
  const props = {foo: 'bar'};

  const rendered = shallow(
    <div>{renderContent({loading: true, error: undefined, data}, props)}</div>
  );

  // console.log(rendered.debug());

  expect(rendered.contains(<p>Loading...</p>)).toBeTruthy();
});

it('renders correct content for error', () => {
  const data = {};
  const props = {foo: 'bar'};
  const err = new Error('Some error');

  const rendered = shallow(
    <div>{renderContent({loading: false, error: err, data}, props)}</div>
  );

  // console.log(rendered.debug());

  expect(rendered.contains(<p>Error!</p>)).toBeTruthy();
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
    <div>{renderContent({loading: false, error: undefined, data}, props)}</div>
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
