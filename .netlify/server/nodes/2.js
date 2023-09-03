

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6ce14355.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js"];
export const stylesheets = ["_app/immutable/assets/2.4a0e10b6.css"];
export const fonts = [];
