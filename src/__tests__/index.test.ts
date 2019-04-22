import { BlueBase } from '@bluebase/core';
import Plugin from '../index';
import { Skeletons } from '../components/Skeleton';
test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('skeleton-loader')).toBeTruthy();
});
test('Plugin should be correctly mounted', async () => {
	const props = {
		type: 'Circle',
		x: 12,
		rx: 12,
		ry: 12,
		width: 12,
		height: 12,
		cx: 12,
		cy: 12,
		r: 12,
	};
	const params = props as any;
	const res = Skeletons(params);
	expect(res).toEqual(12);
});
