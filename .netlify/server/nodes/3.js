

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2bffbc87.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js"];
export const stylesheets = [];
export const fonts = [];
