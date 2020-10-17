import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import {BrowserRouter} from 'react-router-dom';
import DataProvider from '../../data-provider/data-provider.js';
import Lexicon from '../../components/lexicon/lexicon.js';

import ShowIntegral from './show-integral.js';

const data = [
  {w: 'one', c: 1},
  {w: 'two', c: 2},
  {w: 'three', c: 3},
];

// Module.mock must be in the same scope as import Module
jest.mock('../../data-provider/data-provider.js');
DataProvider.mockImplementation(({children, query}) => {
  const Children = children;
  return (<Children data={data} />);
});

jest.mock('../../components/lexicon/lexicon.js');
Lexicon.mockImplementation(({data, WrapLink}) => {
  return (
    <React.Fragment>
      {data.map(item => WrapLink({item, children: item.c}))}
    </React.Fragment>
  );
});

it('uses correct query', () => {
  const rendered = shallow(<ShowIntegral match={{params: {lingua: 'lat'}}} />);

  // console.log(rendered.debug());

  const provider = rendered.find('DataProvider');
  expect(provider.exists()).toBeTruthy();
  expect(provider.prop('query')).toEqual({
    name: 'lexiconIntegral',
    gql: 'lexiconIntegral(lingua: "lat") { w c }',
  });
});

it('renders correct content', () => {
  const rendered = mount(
    <BrowserRouter>
      <ShowIntegral match={{params: {lingua: 'lat'}, url: '/route/integral/lat'}} />
    </BrowserRouter>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
