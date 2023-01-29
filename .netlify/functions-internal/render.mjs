import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-98afa4d2.js","imports":["_app/immutable/start-98afa4d2.js","_app/immutable/chunks/index-a890ca3b.js","_app/immutable/chunks/singletons-01d61a29.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
