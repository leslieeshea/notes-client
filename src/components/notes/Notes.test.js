import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';

describe('Notes component', () => {
  it('can render notes', () => {
    const wrapper = shallow(<Notes notes={[{ _id: '123', title: 'hello there', body: 'goodbye' }]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
