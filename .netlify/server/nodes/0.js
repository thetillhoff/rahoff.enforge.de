export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.aa93965f.js',
	'_app/immutable/chunks/scheduler.c64f0b9a.js',
	'_app/immutable/chunks/index.192f38c7.js',
	'_app/immutable/chunks/Container.0f89b0f4.js',
	'_app/immutable/chunks/Image.7bfe28ca.js'
];
export const stylesheets = [
	'_app/immutable/assets/0.3ce37276.css',
	'_app/immutable/assets/Container.f610ab34.css',
	'_app/immutable/assets/Image.5b9a110a.css'
];
export const fonts = [];
