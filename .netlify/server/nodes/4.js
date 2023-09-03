

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shipping/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.1b2ef1ab.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js"];
export const stylesheets = [];
export const fonts = [];
