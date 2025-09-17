import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BRMiUHWH.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DvLrhxjN.js","_app/immutable/chunks/7U2Uplmp.js","_app/immutable/chunks/Rf_sOdS3.js","_app/immutable/chunks/zZ8_lf7V.js","_app/immutable/chunks/8bL1A_Fe.js"];
export const stylesheets = ["_app/immutable/assets/Container.BtyBNXuh.css"];
export const fonts = [];
