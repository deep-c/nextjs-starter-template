import * as React from 'react';
import {shallow} from 'enzyme';
import Index from '../../src/pages/index'

test('Index Page', async () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.text()).toContain('Not signed in');
});
