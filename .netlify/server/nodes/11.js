import * as universal from '../entries/pages/Schmuck/Ringe/Eichenstein/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/Schmuck/Ringe/Eichenstein/_page.svelte.js'))
		.default);
export { universal };
export const universal_id = 'src/routes/Schmuck/Ringe/Eichenstein/+page.ts';
export const imports = [
	'_app/immutable/nodes/11.9b495baa.js',
	'_app/immutable/chunks/environment.9aa685ef.js',
	'_app/immutable/chunks/scheduler.c64f0b9a.js',
	'_app/immutable/chunks/index.192f38c7.js',
	'_app/immutable/chunks/Gallery.b0c42c86.js',
	'_app/immutable/chunks/Container.0f89b0f4.js',
	'_app/immutable/chunks/Breadcrumbs.7ba1d1af.js'
];
export const stylesheets = [
	'_app/immutable/assets/Image.5b9a110a.css',
	'_app/immutable/assets/Gallery.6c121df6.css',
	'_app/immutable/assets/Container.f610ab34.css',
	'_app/immutable/assets/Breadcrumbs.7fa5f01c.css'
];
export const fonts = [];
