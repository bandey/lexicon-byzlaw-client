import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import markWordInText from './mark-word-in-text.js';

it('mark word in first position', () => {
  const rendered = mount(
    <React.Fragment>
      {markWordInText('first', ' first last ')}
    </React.Fragment>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('mark word in middle position', () => {
  const rendered = mount(
    <React.Fragment>
      {markWordInText('middle', ' first middle last ')}
    </React.Fragment>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('mark word in last position', () => {
  const rendered = mount(
    <React.Fragment>
      {markWordInText('last', ' first last ')}
    </React.Fragment>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('no marking, if word is not found', () => {
  const rendered = mount(
    <React.Fragment>
      {markWordInText('middle', ' first last ')}
    </React.Fragment>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});

it('mark several words', () => {
  const rendered = mount(
    <React.Fragment>
      {markWordInText('middle', ' first middle middle last ')}
    </React.Fragment>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
