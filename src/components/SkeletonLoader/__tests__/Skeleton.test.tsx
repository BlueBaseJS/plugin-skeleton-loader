import { BlueBaseApp, getComponent } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { skeletonProps } from '../';

import { waitForElement } from 'enzyme-async-helpers';
const Skeletons = getComponent<skeletonProps>('Skeletons');

test('Responsive Grid with default prop', async () => {


	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Skeletons type="Circle" />

		 </BlueBaseApp>
	);
	console.log('wrapper', wrapper.props());
	await waitForElement(wrapper, Skeletons);
	// expect(wrapper.find('ResponsiveLayout')).toBeDefined();
        // wrapper.toMatc
	// expect(wrapper.props().children.props.style).toEqual({})
});


