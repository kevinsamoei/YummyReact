import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import CategoryGet from '../categories/GetCategories';

describe('CategoryGet Component', () => {
    const wrapper = shallow(<CategoryGet />);
    it('renders without crashing', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});