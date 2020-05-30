import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckButton from './CheckButton';


Enzyme.configure({adapter: new Adapter()});

describe('CheckButton', () => {
    it('show text', () => {
        const wrapper = shallow(<CheckButton />);
        const text = wrapper.find('div div');
        //assert
        expect(text.text()).toBe('Welcome');
    });
});