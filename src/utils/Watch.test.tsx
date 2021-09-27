import {mount} from "enzyme";
import * as React from "react";

import { Watch, WatchParams } from "./Watch";


const createWrapper = (sampleJson: WatchParams) => {
	return mount(<Watch {...sampleJson}/>);
};

describe('render Watch Component', () => {
	let wrapper;
	afterEach(()=> {
		wrapper.unmount();
	});

	it('should call watch with empty params', ()=> {
		wrapper = createWrapper({children: {}});
		expect(wrapper).toEqual({});
	});

	it('watch call on passing null params', () => {
		wrapper = createWrapper({children: null, from: "local"});
		expect(wrapper).toEqual({});
	})

});

