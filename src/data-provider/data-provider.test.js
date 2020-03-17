import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import {renderChildren} from './data-provider.js';

function Dummy() {
  return (<div>Dummy</div>);
}

function translate(text) {
  return text;
}

it('renders correct content for loading', () => {
  const data = {};

  const rendered = shallow(
    <div>
      {
        renderChildren(
          Dummy,
          'someQuery',
          translate,
          {loading: true, error: undefined, data}
        )
      }
    </div>
  );

  // console.log(rendered.debug());

  const alert = rendered.find('Alert');
  expect(alert.exists()).toBeTruthy();
  expect(alert.prop('variant')).toEqual('secondary');
  expect(alert.contains('$Loading')).toBeTruthy();
});

it('renders correct content for error', () => {
  const data = {};
  const err = new Error('Some error');

  const rendered = shallow(
    <div>
      {
        renderChildren(
          Dummy,
          'someQuery',
          translate,
          {loading: false, error: err, data}
        )
      }
    </div>
  );

  // console.log(rendered.debug());

  const alert = rendered.find('Alert');
  expect(alert.exists()).toBeTruthy();
  expect(alert.prop('variant')).toEqual('danger');
  expect(alert.contains('$Error loading')).toBeTruthy();
});

it('renders correct content for data', () => {
  const data = {
    someQuery: [
      {w: 'one', c: 1},
      {w: 'two', c: 2},
      {w: 'three', c: 3},
    ]
  };

  const rendered = shallow(
    <div>
      {
        renderChildren(
          Dummy,
          'someQuery',
          translate,
          {loading: false, error: undefined, data}
        )
      }
    </div>
  );

  // console.log(rendered.debug());

  const dummy = rendered.find('Dummy');
  expect(dummy.exists()).toBeTruthy();
  expect(dummy.prop('data')).toEqual([
    {w: 'one', c: 1},
    {w: 'two', c: 2},
    {w: 'three', c: 3},
  ]);
});
