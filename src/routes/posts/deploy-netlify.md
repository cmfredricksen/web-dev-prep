---
title: Deploying Your SvelteKit App to Netlify
date: 2022-07-12
tags: 
- deployment
- configuration 
---

This is how to deploy your SvelteKit app using Netlify. You will need to have your app's code in a repository on GitHub. If you need help getting started with Git and/or GitHub please visit my site [Beginner's Guide to Git & GitHub](https://technotesbycmfred.netlify.app/).

### Prepare the Code

First you will have to prepare the code to be ready for Netlify.

1. Install the [netlify adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
   ```js
   npm i -D @sveltejs/adapter-netlify
   ```
2. Configure SvelteKit to use the Netlify Adapter
   In **svelte.config.js:**

Before you add the Netlify adapter you will have the auto adapter that is installed when you initialize your SvelteKit project. Once you install the Netlify adapter you will need to change the svelte.config.js file, which you can do by switching out the import source as shown below. _Simply replace adapter-auto with adapter-netlify_.
At the Netlify adapter GitHub page they have an example including options you can use, but it will work as is.

```js
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter()
  }
};
```

3. Make your **netlify.toml** file on the root of your project. 

```toml
[build]
  command = "npm run build"
  publish = "build"
```

4. Build the app
```js
npm run build
```

5. Commit and push your changes to your GitHub repo.
   ```git
   git add -A && git commit -m "message about commit" && git push
   ```