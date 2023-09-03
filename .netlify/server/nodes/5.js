

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ebbd7bca.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js","_app/immutable/chunks/index.9bd40db2.js"];
export const stylesheets = [];
export const fonts = [];
