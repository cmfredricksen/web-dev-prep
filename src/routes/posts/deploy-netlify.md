---
title: Deploying Your SvelteKit App to Netlify
date: 2022-07-12
tags: 
- deployment
- configuration 
---

This is how to deploy your SvelteKit app using Netlify. You will need to have your app's code in a repository on GitHub. If you need help getting started with Git and/or GitHub please visit my site <a href="https://technotesbycmfred.netlify.app" target="_blank">Beginners Guide to Git & GitHub</a>.

### Prepare the Code

First you will have to prepare the code to be ready for Netlify.

1. Install the [netlify adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)

<div class="code-box">
  <p>npm i -D @sveltejs/adapter-netlify</p>
</div>

2. Configure SvelteKit to use the Netlify Adapter
   In **svelte.config.js:**

Before you add the Netlify adapter you will have the auto adapter that is installed when you initialize your SvelteKit project. Once you install the Netlify adapter you will need to change the svelte.config.js file, which you can do by switching out the import source as shown below. _Simply replace adapter-auto with adapter-netlify_.
At the Netlify adapter GitHub page they have an example including options you can use, but it will work as is.

  <div class="code-box">
  <p>import adapter from "sveltejs/adapter-netlify";</p>
  </div>

```js
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

<div class="code-box">
<p>
   git add -A && git commit -m "message about commit" && git push
</p>
</div>


### Deploy to Netlify

1. Sign up for a free Netlify account at [netlify.com](https://www.netlify.com/)
2. Sign in and go to your team overview page
3. Click on **add new site**
4. Choose _Import an existing project_
5. Pick GitHub to get a list of your repositories
6. Choose the repository from the list
7. Click to deploy, you can change the name once the site is built.
8. It will take a few minutes for the site to be built and deployed.
9. Once it is built go visit the site to make sure it works
10. If you want you can change the name of your site just click on _Site Settings_ on your site's overview page. On the right hand side you will see your site's name and where to change it.

### Bonus

1. Copy the url to your website
2. Go to your GitHub repo for the site
3. In the right hand column click _About_ settings
4. There is a place to add the link to your site.

### Going forward

Whenever you make changes to your website and push the changes to GitHub, Netlify will rebuild your site and re-deploy it. It may take a minute or two, but once it is done the changes will be reflected on your site.