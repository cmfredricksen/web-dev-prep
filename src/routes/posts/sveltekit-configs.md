---
title: Configuring SvelteKit
date: 2022-07-11
tags: 
    - config
    - svelte-kit
    - coding
---


At this time, the summer of 2022, SvelteKit is still in beta. I am still using it for all of my projects, and I am trying to get a real in depth understanding of how it works.

I like to use a lib file for my header, footer and any components I need. The items inside of the lib folder are accessible using $lib rather than the path to said item. Below is an example:

```js 
import Header from "$lib/header.svelte"
```

In order for this feature to work, at this time, you have to specify the directory you want to use inside of the config file. In the config file there is a config object, and inside is the kit object.
To signify the library add the files element as shown below.

**svelte.config.js**
```js
	kit: {
		adapter: adapter(),
		files: {
			lib: "src/lib"
		}
	},
```

For an example of the config file and all of the options go to the [SvelteKit Docs](https://kit.svelte.dev/docs/configuration)

Once you add the files value to the config, then any component within that folder is accessible using $lib.
