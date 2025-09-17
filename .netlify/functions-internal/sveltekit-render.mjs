import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/Schmuck/Ringe/Eichenstein/Eichenstein.jpg","images/Schmuck/Ringe/Eichenstein/Eichenstein_1.jpg","images/Schmuck/Ringe/Eichenstein/Eichenstein_2.jpg","images/Schmuck/Ringe/Eichenstein/Eichenstein_3.jpg","images/Schmuck/Ringe/Eichenstein/Eichenstein_4.jpg","images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde.jpg","images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_1.jpg","images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_2.jpg","images/Schmuck/Ringe/Gebogene_Ronde/Gebogene_Ronde_3.jpg","images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic.jpg","images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_1.jpg","images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_2.jpg","images/Schmuck/Ringe/Lichtreflexe_Classic/Lichtreflexe_Classic_3.jpg","images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern.jpg","images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_1.jpg","images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_2.jpg","images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_3.jpg","images/Schmuck/Ringe/Lichtreflexe_Modern/Lichtreflexe_Modern_4.jpg","images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss.jpg","images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_1.jpg","images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_2.jpg","images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_3.jpg","images/Schmuck/Ringe/Schwarz-Weiss/Schwarz-Weiss_4.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_1.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_2.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_3.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_4.jpg","images/Schmuck/Ringe/Silberhochzeit/Silberhochzeit_5.jpg","images/Schmuck/Ringe/Trauer/Trauer.jpg","images/Schmuck/Ringe/Trauer/Trauer_1.jpg","images/Schmuck/Ringe/Trauer/Trauer_2.jpg","images/Schmuck/Ringe/Trauer/Trauer_3.jpg","images/Schmuck/Ringe/Trauer/Trauer_4.jpg","images/Schmuck/Ringe/Trauer/Trauer_5.jpg","images/icons/loader.svg","images/icons/three-stripes.svg","images/logo/rahoff-scale-1.svg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DmM2TIfH.js",app:"_app/immutable/entry/app.Kprc8-Hv.js",imports:["_app/immutable/entry/start.DmM2TIfH.js","_app/immutable/chunks/B66RcXE4.js","_app/immutable/chunks/BqzI2QR1.js","_app/immutable/chunks/7U2Uplmp.js","_app/immutable/chunks/DNXvi1D2.js","_app/immutable/chunks/B-bbywUc.js","_app/immutable/chunks/Rf_sOdS3.js","_app/immutable/entry/app.Kprc8-Hv.js","_app/immutable/chunks/7U2Uplmp.js","_app/immutable/chunks/DNXvi1D2.js","_app/immutable/chunks/B-bbywUc.js","_app/immutable/chunks/Rf_sOdS3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqzI2QR1.js","_app/immutable/chunks/CWmpy-nD.js","_app/immutable/chunks/TfHyLQ0Z.js","_app/immutable/chunks/8bL1A_Fe.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/Bilder","/Datenschutz","/Elektroauto","/Impressum","/Schmuck","/Schmuck/Anhaenger","/Schmuck/Halsketten","/Schmuck/Ringe","/Schmuck/Ringe/Eichenstein","/Schmuck/Ringe/Gebogene_Ronde","/Schmuck/Ringe/Lichtreflexe_Classic","/Schmuck/Ringe/Lichtreflexe_Modern","/Schmuck/Ringe/Schwarz-Weiss","/Schmuck/Ringe/Silberhochzeit","/Schmuck/Ringe/Trauer","/Skulpturen"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
