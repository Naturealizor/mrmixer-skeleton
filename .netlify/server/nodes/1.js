

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a650e01a.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js","_app/immutable/chunks/singletons.cd1b3800.js","_app/immutable/chunks/index.9bd40db2.js","_app/immutable/chunks/paths.4f65449b.js"];
export const stylesheets = [];
export const fonts = [];
