---
title: Configuring SvelteKit
date: 2022-07-11
tags: 
    - config
    - svelte-kit
    - coding
---

### **SvelteKit is in Beta**
<small>Check the <a href="https://kit.svelte.dev/docs/introduction" target="_blank">Docs</a>

### Kit Settings

I like to use a lib file for my header, footer and any components I need. The items inside of the lib folder are accessible using $lib rather than the path to said item. Below is an example:

<div class="code-box">
<p>
import Header from "$lib/header.svelte"
</p>
</div>

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
