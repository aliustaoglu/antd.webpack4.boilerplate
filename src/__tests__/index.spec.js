import React from 'react';
import { mount, shallow } from 'enzyme';

describe('index tests', () => {
  it('can test', () => {
    const wrapper = mount(<div>deneme</div>);
    expect(wrapper.html()).toBe('<div>deneme</div>');
  });
});
