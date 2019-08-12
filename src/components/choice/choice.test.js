import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import enzymeToJson from 'enzyme-to-json';

import Choice from './choice.js';

it('renders correct content', () => {
  const data = [
    {id: 'one', name: 'Alpha'},
    {id: 'two', name: 'Betta'},
    {id: 'three', name: 'Gamma'},
  ];

  function wrapLink(id, Child) {
    return (
      <a key={id} href={`/${id}`}>
        {Child}
      </a>
    );
  };

  const rendered = mount(
    <Choice title="Make your choice" wrapLink={wrapLink}>
      {data}
    </Choice>
  );

  // console.log(rendered.debug());

  expect(enzymeToJson(rendered)).toMatchSnapshot();
});
