export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.6c6ff065.js',
	'_app/immutable/chunks/scheduler.c64f0b9a.js',
	'_app/immutable/chunks/index.192f38c7.js',
	'_app/immutable/chunks/singletons.73eacfc5.js'
];
export const stylesheets = [];
export const fonts = [];
