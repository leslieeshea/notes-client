import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note component', () => {
  it('can render a note', () => {
    const wrapper = shallow(<Note note={{ _id: '123', title: 'hello', body: 'goodbye' }} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
