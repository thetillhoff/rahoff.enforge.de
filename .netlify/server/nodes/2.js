import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.dcf67033.js","_app/immutable/chunks/scheduler.c64f0b9a.js","_app/immutable/chunks/index.192f38c7.js","_app/immutable/chunks/Container.0f89b0f4.js"];
export const stylesheets = ["_app/immutable/assets/Container.f610ab34.css"];
export const fonts = [];
