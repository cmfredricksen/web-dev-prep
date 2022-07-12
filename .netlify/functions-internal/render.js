const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-912fc565.js","imports":["immutable/start-912fc565.js","immutable/chunks/index-f9a65bb3.js","immutable/chunks/preload-helper-96c8edfa.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "posts",
				pattern: /^\/posts\/?$/,
				names: [],
				types: [],
				path: "/posts",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/Layout",
				pattern: /^\/posts\/Layout\/?$/,
				names: [],
				types: [],
				path: "/posts/Layout",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/deploy-netlify",
				pattern: /^\/posts\/deploy-netlify\/?$/,
				names: [],
				types: [],
				path: "/posts/deploy-netlify",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/sveltekit-configs",
				pattern: /^\/posts\/sveltekit-configs\/?$/,
				names: [],
				types: [],
				path: "/posts/sveltekit-configs",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "posts/vim-key-bindings",
				pattern: /^\/posts\/vim-key-bindings\/?$/,
				names: [],
				types: [],
				path: "/posts/vim-key-bindings",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "tags/[tag]",
				pattern: /^\/tags\/([^/]+?)\/?$/,
				names: ["tag"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
