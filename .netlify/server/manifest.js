export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf","Logo 1.svg","Product_Pictures/20201007_140555.jpg","Product_Pictures/20201007_192440.jpg","Product_Pictures/20201008_102958.jpg","Product_Pictures/20201008_103005.jpg","Product_Pictures/20201009_102148.jpg","Product_Pictures/20201009_130339.jpg","Product_Pictures/20230116_101324.jpg","Product_Pictures/20230116_101345.jpg","Product_Pictures/bearing_bracket.jpg","Product_Pictures/bearing_bracket_2.jpg","Product_Pictures/bearing_bracket_3.jpg","Product_Pictures/bevel_and_hub_gear.jpg","Product_Pictures/bevel_and_hub_gear_(2).jpg","Product_Pictures/Bowl_Lock_Lever.jpg","Product_Pictures/Bowl_Lock_Lever_(2).jpg","Product_Pictures/File_001.jpeg","Product_Pictures/File_002.jpeg","Product_Pictures/File_003.jpeg","Product_Pictures/Gallery_Pic (1).jpg","Product_Pictures/Gallery_Pic (10).jpg","Product_Pictures/Gallery_Pic (11).jpg","Product_Pictures/Gallery_Pic (12).jpg","Product_Pictures/Gallery_Pic (13).jpg","Product_Pictures/Gallery_Pic (14).jpg","Product_Pictures/Gallery_Pic (15).jpg","Product_Pictures/Gallery_Pic (16).jpg","Product_Pictures/Gallery_Pic (17).jpg","Product_Pictures/Gallery_Pic (18).jpg","Product_Pictures/Gallery_Pic (19).jpg","Product_Pictures/Gallery_Pic (2).jpg","Product_Pictures/Gallery_Pic (20).jpg","Product_Pictures/Gallery_Pic (21).jpg","Product_Pictures/Gallery_Pic (22).png","Product_Pictures/Gallery_Pic (3).jpg","Product_Pictures/Gallery_Pic (4).jpg","Product_Pictures/Gallery_Pic (5).jpg","Product_Pictures/Gallery_Pic (6).jpg","Product_Pictures/Gallery_Pic (7).jpg","Product_Pictures/Gallery_Pic (8).jpg","Product_Pictures/Gallery_Pic (9).jpg","Product_Pictures/Governor (1).jpg","Product_Pictures/Governor+(2).jpg","Product_Pictures/Governor.jpg","Product_Pictures/Governor_(2).jpg","Product_Pictures/Grease.jpg","Product_Pictures/Grease_(2).jpg","Product_Pictures/IMG_1778.jpg","Product_Pictures/IMG_1779.jpg","Product_Pictures/IMG_20200306_162210_140.jpg","Product_Pictures/IMG_3907.jpeg","Product_Pictures/IMG_3908.jpeg","Product_Pictures/IMG_3909.jpeg","Product_Pictures/IMG_4140.jpeg","Product_Pictures/IMG_4141.jpeg","Product_Pictures/IMG_4142.jpeg","Product_Pictures/Motor_Brushes.jpg","Product_Pictures/Motor_Brushes2.jpg","Product_Pictures/Motor_Brushes3.jpg","Product_Pictures/Mr.+Mixer+Logo+black.jpg","Product_Pictures/MrMixerLogo - Copy (Small).jpg","Product_Pictures/MrMixerLogo - Copy.jpg","Product_Pictures/My Post.jpg","Product_Pictures/Power_Cord.jpg","Product_Pictures/Power_Cord_(2).jpg","Product_Pictures/Professional_600_and_Pro_5_Plus_Rubber_Feet.jpg","Product_Pictures/Professional_600_and_Pro_5_Plus_Rubber_Feet_(2).jpg","Product_Pictures/Punches.jpg","Product_Pictures/Punches_(2).jpg","Product_Pictures/Rubber_Mallet.jpg","Product_Pictures/Rubber_Mallet_(2).jpg","Product_Pictures/Snap_Ring_Pliers.jpg","Product_Pictures/Snap_Ring_Pliers2.jpg","Product_Pictures/Speed_Control_Board.jpg","Product_Pictures/Speed_Control_Board_(2).jpg","Product_Pictures/Speed_Control_Knob.jpg","Product_Pictures/Speed_Control_Knob2.jpg","Product_Pictures/speed_control_plate.jpg","Product_Pictures/speed_control_plate_(2).jpg","Product_Pictures/Square_Driver.jpg","Product_Pictures/Square_Driver3.jpg","Product_Pictures/Squre_Driver2.jpg","Product_Pictures/Worm_Follower_Gear.jpg","Product_Pictures/Worm_Follower_Gear_%282%29.jpg","Product_Pictures/Worm_Follower_Gear__282_29.jpg","Product_Pictures/worm_gear.jpg","Product_Pictures/worm_gear_2.jpg","Vector.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.ee9a3468.js","app":"_app/immutable/entry/app.964b63b1.js","imports":["_app/immutable/entry/start.ee9a3468.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/singletons.cd1b3800.js","_app/immutable/chunks/index.9bd40db2.js","_app/immutable/chunks/paths.4f65449b.js","_app/immutable/entry/app.964b63b1.js","_app/immutable/chunks/scheduler.269e50db.js","_app/immutable/chunks/index.dbb0fb9e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/shipping",
				pattern: /^\/shipping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tutorials",
				pattern: /^\/tutorials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
