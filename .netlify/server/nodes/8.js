import * as universal from '../entries/pages/Schmuck/Anhaenger/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/Schmuck/Anhaenger/_page.svelte.js'))
		.default);
export { universal };
export const universal_id = 'src/routes/Schmuck/Anhaenger/+page.ts';
export const imports = [
	'_app/immutable/nodes/8.8b5ffe2f.js',
	'_app/immutable/chunks/environment.9aa685ef.js',
	'_app/immutable/chunks/scheduler.c64f0b9a.js',
	'_app/immutable/chunks/index.192f38c7.js',
	'_app/immutable/chunks/Container.0f89b0f4.js'
];
export const stylesheets = ['_app/immutable/assets/Container.f610ab34.css'];
export const fonts = [];
