import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import {BrowserRouter} from 'react-router-dom';
import DataProvider from '../../data-provider/data-provider.js';
import Choice from '../../components/choice/choice.js';

import ChoiceOpus from './choice-opus.js';

const data = [
  {id: 'one', name: 'Alpha'},
  {id: 'two', name: 'Betta'},
  {id: 'three', name: 'Gamma'},
];

// Module.mock must be in the same scope as import Module
jest.mock('../../data-provider/data-provider.js');
DataProvider.mockImplementation(({children, query}) => {
  const Children = children;
  return (<Children data={data} />);
});

jest.mock('../../components/choice/choice.js');
Choice.mockImplementation(({title, children, wrapLink}) => {
  return (
    <React.Fragment>
      {children.map(item => wrapLink(item.id, item.name))}
    </React.Fragment>
  );
});

it('uses correct query', () => {
  const rendered = shallow(<ChoiceOpus />);

  // console.log(rendered.debug());

  const provider = rendered.find('DataProvider');
  expect(provider.exists()).toBeTruthy();
  expect(provider.prop('query')).toEqual({
    name: 'opusAll',
    gql: 'opusAll { id name }',
  });
});

it('renders correct content', () => {
  const rendered = mount(
    <BrowserRouter>
      <ChoiceOpus />
    </BrowserRouter>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
