export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set([
			'favicon.ico',
			'images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg',
			'images/Schmuck/Ringe/Eichenstein/Eichenstein_1.jpg',
			'images/Schmuck/Ringe/Eichenstein/Eichenstein_2.jpg',
			'images/Schmuck/Ringe/Eichenstein/Eichenstein_3.jpg',
			'images/Schmuck/Ringe/Eichenstein/Eichenstein_4.jpg',
			'images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg',
			'images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_1.jpg',
			'images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_2.jpg',
			'images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_3.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_1.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_2.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_3.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_1.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_2.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_3.jpg',
			'images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_4.jpg',
			'images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg',
			'images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_1.jpg',
			'images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_2.jpg',
			'images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_3.jpg',
			'images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_4.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_1.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_2.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_3.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_4.jpg',
			'images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_5.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer_1.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer_2.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer_3.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer_4.jpg',
			'images/Schmuck/Ringe/Trauer/Trauer_5.jpg',
			'images/icons/loader.svg',
			'images/icons/three-stripes.svg',
			'images/logo/rahoff-scale-1.svg',
			'robots.txt'
		]),
		mimeTypes: {
			'.ico': 'image/vnd.microsoft.icon',
			'.jpg': 'image/jpeg',
			'.svg': 'image/svg+xml',
			'.txt': 'text/plain'
		},
		_: {
			client: {
				start: '_app/immutable/entry/start.753d861b.js',
				app: '_app/immutable/entry/app.4a4600d8.js',
				imports: [
					'_app/immutable/entry/start.753d861b.js',
					'_app/immutable/chunks/scheduler.c64f0b9a.js',
					'_app/immutable/chunks/singletons.73eacfc5.js',
					'_app/immutable/entry/app.4a4600d8.js',
					'_app/immutable/chunks/scheduler.c64f0b9a.js',
					'_app/immutable/chunks/index.192f38c7.js'
				],
				stylesheets: [],
				fonts: []
			},
			nodes: [
				__memo(() => import('./nodes/0.js')),
				__memo(() => import('./nodes/1.js')),
				__memo(() => import('./nodes/2.js')),
				__memo(() => import('./nodes/3.js')),
				__memo(() => import('./nodes/4.js')),
				__memo(() => import('./nodes/5.js')),
				__memo(() => import('./nodes/6.js')),
				__memo(() => import('./nodes/7.js')),
				__memo(() => import('./nodes/8.js')),
				__memo(() => import('./nodes/9.js')),
				__memo(() => import('./nodes/10.js')),
				__memo(() => import('./nodes/11.js')),
				__memo(() => import('./nodes/12.js')),
				__memo(() => import('./nodes/13.js')),
				__memo(() => import('./nodes/14.js')),
				__memo(() => import('./nodes/15.js')),
				__memo(() => import('./nodes/16.js')),
				__memo(() => import('./nodes/17.js')),
				__memo(() => import('./nodes/18.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/Bilder',
					pattern: /^\/Bilder\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/Datenschutz',
					pattern: /^\/Datenschutz\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null
				},
				{
					id: '/Elektroauto',
					pattern: /^\/Elektroauto\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 5 },
					endpoint: null
				},
				{
					id: '/Impressum',
					pattern: /^\/Impressum\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 6 },
					endpoint: null
				},
				{
					id: '/Schmuck',
					pattern: /^\/Schmuck\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 7 },
					endpoint: null
				},
				{
					id: '/Schmuck/Anhaenger',
					pattern: /^\/Schmuck\/Anhaenger\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 8 },
					endpoint: null
				},
				{
					id: '/Schmuck/Halsketten',
					pattern: /^\/Schmuck\/Halsketten\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 9 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe',
					pattern: /^\/Schmuck\/Ringe\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 10 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Eichenstein',
					pattern: /^\/Schmuck\/Ringe\/Eichenstein\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 11 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Gebogene_Ronde',
					pattern: /^\/Schmuck\/Ringe\/Gebogene_Ronde\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 12 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Lichtreflexe_Classic',
					pattern: /^\/Schmuck\/Ringe\/Lichtreflexe_Classic\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 13 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Lichtreflexe_Modern',
					pattern: /^\/Schmuck\/Ringe\/Lichtreflexe_Modern\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 14 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Schwarz-Weiss',
					pattern: /^\/Schmuck\/Ringe\/Schwarz-Weiss\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 15 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Silberhochzeit',
					pattern: /^\/Schmuck\/Ringe\/Silberhochzeit\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 16 },
					endpoint: null
				},
				{
					id: '/Schmuck/Ringe/Trauer',
					pattern: /^\/Schmuck\/Ringe\/Trauer\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 17 },
					endpoint: null
				},
				{
					id: '/Skulpturen',
					pattern: /^\/Skulpturen\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 18 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			}
		}
	};
})();
