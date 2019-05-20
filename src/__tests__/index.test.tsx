import Adapter from 'enzyme-adapter-react-16';
import { BlueBase } from '@bluebase/core';
import Plugin from '../index';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('ReactSkeletonPlugin')).toBeTruthy();
});
// test('Plugin should be correctly mounted', () => {
// 	const props = {
// 		type: 'Circle',
// 		x: 12,
// 		rx: 12,
// 		ry: 12,
// 		width: 12,
// 		height: 12,
// 		cx: 12,
// 		cy: 12,
// 		r: 12,
// 	};
// 	const params = props as any;
// 	const res = mount(<Skeletons   {...params}/>);
// 	expect(res).toEqual(12);
// });
