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
			nodes: [__memo(() => import('./nodes/0.js')), __memo(() => import('./nodes/1.js'))],
			routes: [],
			matchers: async () => {
				return {};
			}
		}
	};
})();
