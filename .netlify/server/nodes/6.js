

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tutorials/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.2bffbc87.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js"];
export const stylesheets = [];
export const fonts = [];
